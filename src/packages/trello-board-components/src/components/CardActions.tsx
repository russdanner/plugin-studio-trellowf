import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { Typography, Link } from '@mui/material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import {
  showEditDialog,
  showNewContentDialog,
  closeNewContentDialog,
  newContentCreationComplete,
  showUploadDialog,
  closeUploadDialog,
  showPublishDialog,
  closePublishDialog,
  showRejectDialog,
  closeRejectDialog,
  showWidgetDialog
} from '@craftercms/studio-ui/state/actions/dialogs';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import { lookupItemByPath } from '@craftercms/studio-ui/utils/content';
import { useItemsByPath } from '@craftercms/studio-ui/hooks/useItemsByPath';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import { fetchSandboxItem, fetchItemsByPath } from '@craftercms/studio-ui/services/content';
import { dispatchDOMEvent, batchActions } from '@craftercms/studio-ui/state/actions/misc';
import { createCustomDocumentEventListener } from '@craftercms/studio-ui/utils/dom';

import CardRecord from '../types/CardRecord';
import CardDetailsRecord from '../types/CardDetailsRecord';

export interface CardActionsProps {
  card: CardRecord;
  cardDetails: CardDetailsRecord;
  onMenuOpen(): void;
}

const CardActions = ({ card, cardDetails, onMenuOpen }: CardActionsProps) => {
  const PLUGIN_SERVICE_BASE = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf';

  const siteId = useActiveSiteId();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [attachAnchorEl, setAttachAnchorEl] = React.useState<null | HTMLElement>(null);
  const attachOpen = Boolean(attachAnchorEl);

  const attachContent = (contentName, siteId, cardId, contentId) => {
    const serverAddress = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

    let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/attach-content.json?siteId=${siteId}&name=${contentName}&cardId=${cardId}&contentId=${contentId}&server=${serverAddress}`;

    get(serviceUrl).subscribe({
      next: (response) => {},
      error(e) {}
    });
  };

  const handleCardActionsClose = () => {
    setAnchorEl(null);
  };

  const handleCardAttachActionsClose = () => {
    setAnchorEl(null);
    setAttachAnchorEl(null);
  };

  const handleCreatePage = () => {
    handleCreateContent('/site/website/index.xml');
  };

  const handleCreateComponent = () => {
    handleCreateContent('/site/components');
  };

  const handleCreateContent = (path) => {
    fetchSandboxItem(siteId, path, { castAsDetailedItem: true }).subscribe({
      next(sandboxItem) {
        createCustomDocumentEventListener('TRELLO_NEW_CONTENT', (response) => {
          attachContent(response.item.internalName, siteId, card.id, response.item.uri);
        });

        createCustomDocumentEventListener('TRELLO_CONTENTTYPE_SELECTED', (response) => {
          dispatch(
            showEditDialog({
              ...response,
              onSaveSuccess: batchActions([
                closeNewContentDialog(),
                newContentCreationComplete(),
                dispatchDOMEvent({
                  id: 'TRELLO_NEW_CONTENT'
                })
              ])
            })
          );
        });

        dispatch(
          showNewContentDialog({
            item: sandboxItem,
            // @ts-ignore - required attributes of `showEditDialog` are submitted by new content dialog `onContentTypeSelected` callback and injected into the showEditDialog action by the GlobalDialogManger
            onContentTypeSelected: dispatchDOMEvent({
              id: 'TRELLO_CONTENTTYPE_SELECTED'
            })
          })
        );
      },
      error() {
        console.error("Oops! We can't find the content you are looking for.");
      }
    });

    handleCardActionsClose();
  };

  const handleUploadAsset = () => {
    createCustomDocumentEventListener('TRELLO_UPLOAD_CONTENT', (response) => {
      console.log('Stuff was upliaded!');
      console.log(response);
      //attachContent(response.item.internalName, siteId, card.id, response.item.uri);
    });

    dispatch(
      showUploadDialog({
        path: '/static-assets/images/library',
        site: siteId,
        onClose: batchActions([
          closeUploadDialog(),
          dispatchDOMEvent({
            id: 'TRELLO_UPLOAD_CONTENT'
          })
        ])
      })
    );

    handleCardActionsClose();
  };

  const handleAttachExistingContent = () => {
    dispatch({
      type: 'SHOW_WIDGET_DIALOG',
      payload: {
        id: 'siteSearchDialog',
        widget: {
          id: 'craftercms.components.Search',
          configuration: {
            embedded: true,
            mode: 'select',
            onAcceptSelection: (response) => {
              console.log('Documents selected, attaching them');
              console.log(response);
              Object.values(response).map((item, itemIndex) => {
                // @ts-ignore item is untyped?
                attachContent(item.label, siteId, card.id, item.path);
              });

              // at the moment search eats our trello board because you can only have one dialog
              // so.. dispatch open trello
              // the problem is we don't have context of the board we are in ARG!
              dispatch(
                showWidgetDialog({
                  ...response,
                  // title: boardLabel,
                  // extraProps: props,
                  widget: {
                    id: 'org.rd.plugin.trellowf.board'
                  }
                })
              );
            }
          }
        }
      }
    });

    handleCardActionsClose();
  };

  const handlePublishContent = () => {
    dispatch(
      showPublishDialog({
        items: cardDetails.attachedContentItems,
        onSuccess: batchActions([closePublishDialog()])
      })
    );
    handleCardActionsClose();
  };

  const handleRequestReviewOfContent = () => {
    console.log('Requesting a publish');
    const schedulingMap = {
      approvePublish: null,
      schedulePublish: 'custom',
      requestPublish: 'now',
      publish: 'now'
    };

    dispatch(
      showPublishDialog({
        scheduling: schedulingMap['requestPublish'],
        items: cardDetails.attachedContentItems,
        isRequestPublish: true,
        isSubmmitting: true,
        submissionCommentRequired: true,
        showRequestApproval: true,
        onSuccess: batchActions([closePublishDialog()])
      })
    );
    handleCardActionsClose();
  };

  const handleRejectContent = () => {
    dispatch(
      showRejectDialog({
        items: cardDetails.attachedContentItems,
        onSuccess: batchActions([closeRejectDialog()])
      })
    );
    handleCardActionsClose();
  };

  const handleClickActions = (event: React.MouseEvent<HTMLElement>) => {
    onMenuOpen();

    setAnchorEl(event.currentTarget);
  };

  const handleClickAttactActions = (event: React.MouseEvent<HTMLElement>) => {
    setAttachAnchorEl(event.currentTarget);
  };

  const handleDeleteCard = () => {
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/delete.json?siteId=${siteId}&cardId=${card.id}`;

    get(serviceUrl).subscribe({
      next: (response) => {},
      error(e) {}
    });
  };

  let hasItemsInReview = false;
  let hasItemsForReview = false;
  let hasItemsForPublish = false;
  let hasItems = false;

  if (cardDetails && cardDetails.attachedContentItems) {
    cardDetails.attachedContentItems?.map((contentItem, contentIndex) => {
      hasItems = true; // invariant
      let availableActionsMap = contentItem.availableActionsMap;

      // basic workflow evaluation
      hasItemsForReview =
        availableActionsMap.rejectPublish === false // can't reject because we're in workflow
          ? true
          : hasItemsForReview;

      hasItemsInReview = availableActionsMap.rejectPublish === true ? true : hasItemsInReview;

      hasItemsForPublish =
        (availableActionsMap.approvePublish || availableActionsMap.publish) === true ? true : hasItemsForPublish;
    });
  }

  return (
    <>
      <IconButton
        id="long-button"
        aria-label="settings"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClickActions}
      >
        <MoreVertRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCardActionsClose}
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
      >
        {/*        <MenuItem onClick={handleClickAttactActions}>
          <Typography>Attach Content to Card</Typography>

          <Menu
            id="attach-menu"
            anchorEl={attachAnchorEl}
            open={attachOpen}
            onClose={handleCardAttachActionsClose}
            MenuListProps={{
              'aria-labelledby': 'long-button'
            }}
          >
*/}{' '}
        <MenuItem key="createPage" onClick={handleCreatePage}>
          <Typography>New Page</Typography>
        </MenuItem>
        <MenuItem key="createComponent" onClick={handleCreateComponent}>
          <Typography>New Component</Typography>
        </MenuItem>
        <MenuItem key="exustubgContent" onClick={handleAttachExistingContent}>
          <Typography>Existing Content</Typography>
        </MenuItem>
        {/*        Can't reliably listen for upload events that we generate so disabling for now
        <MenuItem key="uploadAsset" onClick={handleUploadAsset}>
          <Typography>Upload Asset(s)</Typography>
        </MenuItem>
*/}{' '}
        {/*          </Menu>
        </MenuItem>*/}
        <Divider />
        <MenuItem
          key="handleRequestReviewOfContent"
          onClick={handleRequestReviewOfContent}
          style={{ display: hasItemsForReview ? 'block' : 'none' }}
        >
          <Typography>Request Review</Typography>
        </MenuItem>
        <MenuItem
          key="rejectContent"
          onClick={handleRejectContent}
          style={{ display: hasItemsInReview ? 'block' : 'none' }}
        >
          <Typography>Reject Submission</Typography>
        </MenuItem>
        <MenuItem
          key="publishContent"
          onClick={handlePublishContent}
          style={{ display: hasItemsForPublish ? 'block' : 'none' }}
        >
          <Typography>Publish</Typography>
        </MenuItem>
        <Divider style={{ display: hasItems ? 'block' : 'none' }} />
        <MenuItem key="deleteCard" onClick={handleDeleteCard}>
          <Typography>Close Card</Typography>
        </MenuItem>
        <MenuItem key="openInTrello">
          <Typography>
            <Link href={card.url} target="new">
              Open Card in Trello
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CardActions;
