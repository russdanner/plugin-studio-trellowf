import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
import ItemDisplay from '@craftercms/studio-ui/components/ItemDisplay';
import CardDetails from './CardDetails';

import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Collapse,
  Paper,
  Typography,
  cardClasses,
  Fab,
  Link,
  Button
} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export interface CardContentActions {
  siteId: string;
  cardId: string;
}

const CardContentActions = ({ siteId, cardId }: CardDetailsProps) => {
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
          attachContent(response.item.internalName, siteId, cardId, response.item.uri);
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
    alert('Submit ' + cardId);
    setAnchorEl(null);
  };

  const handleRejectContent = () => {
    alert('Reject ' + cardId);
    handleCardActionsClose();
  };

  const handlePublishContent = () => {
    dispatch(
      showPublishDialog({
        items: rdAttachedContentItems,
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
  );
};

export default CardContentActions;
