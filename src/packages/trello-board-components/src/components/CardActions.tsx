import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { Typography } from '@mui/material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import {
  newContentCreationComplete,
  showEditDialog,
  showNewContentDialog,
  showUploadDialog,
  closeNewContentDialog,
  showPublishDialog,
  closePublishDialog
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
}

const CardActions = ({ card, cardDetails }: CardActionsProps) => {
  const PLUGIN_SERVICE_BASE = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf';

  const siteId = useActiveSiteId();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 55;

  const attachContent = (contentName, siteId, cardId, contentId) => {
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/attach-content.json?siteId=${siteId}&name=${contentName}&cardId=${cardId}&contentId=${contentId}`;

    get(serviceUrl).subscribe({
      next: (response) => {},
      error(e) {}
    });
  };

  const handleCardActionsClose = () => {
    setAnchorEl(null);
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
    dispatch(
      showUploadDialog({
        path: '/static-assets/images/library',
        site: siteId,
        onClose: dispatchDOMEvent({
          id: 'TRELLO_UPLOAD_CONTENT'
        })
      })
    );

    handleCardActionsClose();
  };

  const handleAttachContent = () => {
    createCustomDocumentEventListener('TRELLO_SEARCH_CONTENT', (response) => {
      console.log(response);
      alert('search1!');
      //        attachContent(response.item.internalName, siteId, cardId, response.item.url);
    });

    dispatch({
      type: 'SHOW_WIDGET_DIALOG',
      payload: {
        id: 'siteSearchDialog',
        title: 'Search',
        widget: {
          id: 'craftercms.components.Search',
          configuration: {
            embedded: true,
            mode: 'select',
            onAcceptSelection: (response) => {
              console.log(response);
              alert('search2!');
            }
          }
        }
      }
    });

    //     item: lookupItemByPath('/', items),
    //     // @ts-ignore - required attributes of `showEditDialog` are submitted by new content dialog `onContentTypeSelected` callback and injected into the showEditDialog action by the GlobalDialogManger
    //     onContentTypeSelected: showEditDialog({})
    //   })
    // );
    //attachContent('test', useActiveSiteId(), cardId, '/site/website/index.xml');
    //attachContent('test', siteId, cardId, '/site/website/index.xml');

    handleCardActionsClose();
  };

  const handleSubmitContent = () => {
    alert('Submit ' + card.id);
    setAnchorEl(null);
  };

  const handleRejectContent = () => {
    alert('Reject ' + card.id);
    handleCardActionsClose();
  };

  const handlePublishContent = () => {
    dispatch(
      showPublishDialog({
        items: cardDetails.attachedContentItems,
        onSuccess: batchActions([closePublishDialog()]),
        onClosed: null //dispatchDOMEvent({ id: customEventId, type: 'cancel' })
      })
    );
    handleCardActionsClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        id="long-button"
        aria-label="settings"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
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
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '40ch'
          }
        }}
      >
        <MenuItem key="createPage" onClick={handleCreatePage}>
          Create New Page
        </MenuItem>

        <MenuItem key="createComponent" onClick={handleCreateComponent}>
          Create New Component
        </MenuItem>

        <MenuItem key="uploadAsset" onClick={handleUploadAsset}>
          Upload Asset(s)
        </MenuItem>

        <MenuItem key="attachContent" onClick={handleAttachContent}>
          Attach Existing Content
        </MenuItem>

        <MenuItem key="submitContent" onClick={handleSubmitContent}>
          Submit Content for Review
        </MenuItem>

        <MenuItem key="rejectContent" onClick={handleRejectContent}>
          Reject Content in Review
        </MenuItem>

        <MenuItem key="publishContent" onClick={handlePublishContent}>
          Approve Content for Publish
        </MenuItem>
      </Menu>
    </>
  );
};

export default CardActions;
