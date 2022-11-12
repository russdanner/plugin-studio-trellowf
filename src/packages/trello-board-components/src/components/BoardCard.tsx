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
  showPublishDialog
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

export interface BoardCardProps {
  cardId: string;
  cardName: string;
  trelloCardUrl: string;
  coverColor: string;
  description: string;
  attachmentCount: number;
  cardAttachments: Array<{ id: string; name: string; url: string }>;
}

const BoardCard = ({
  cardId,
  cardName,
  trelloCardUrl,
  coverColor,
  description,
  attachmentCount,
  cardAttachments
}: BoardCardProps) => {
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const siteId = useActiveSiteId();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 55;

  const [rdAttachedContentItems, setRdAttachedContentItems] = useState<any>();
  let rdAttachedContentItemPaths = useMemo(() => [], []);
  let rdAttachedDocuments = useMemo(() => [], []);

  useEffect(() => {
    let contentItems = [];
    let attachments = [];

    cardAttachments?.forEach(function (value) {
      let url = value.url;
      if (url.includes('contentId=')) {
        let path = url.substr(url.indexOf('contentId=') + 10);

        if (path.includes('&')) {
          path = path.substr(0, path.indexOf('&'));
        }

        contentItems[contentItems.length] = path;
      } else {
        rdAttachedDocuments[rdAttachedDocuments.length] = value;
      }
    });

    rdAttachedContentItemPaths = contentItems;

    fetchItemsByPath(siteId, rdAttachedContentItemPaths, { castAsDetailedItem: true }).subscribe({
      next(sandboxItems) {
        setRdAttachedContentItems(sandboxItems);
      }
    });
  }, [siteId, rdAttachedContentItemPaths]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const attachContent = (contentName, siteId, cardId, contentId) => {
    let serviceUrl = `/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/card/attach-content.json?siteId=${siteId}&name=${contentName}&cardId=${cardId}&contentId=${contentId}`;

    get(serviceUrl).subscribe({
      next: (response) => {},
      error(e) {}
    });
  };

  const handleCardActionsClose = () => {
    console.log(anchorEl, open);
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
          attachContent(response.item.internalName, siteId, cardId, response.item.url);
        });

        createCustomDocumentEventListener('TRELLO_CONTENTTYPE_SELECTED', (response) => {
          console.log(response);
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
        onSuccess: null, //batchActions([closePublishDialog(), dispatchDOMEvent({ id: customEventId, type: 'publish' })]),
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
      <Card elevation={3} sx={{ borderTop: coverColor ? `10px solid ${coverColor}` : `` }}>
        <CardHeader
          action={
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
          }
          title={cardName}
          titleTypographyProps={{ variant: 'body1' }}
        />
        {attachmentCount > 0 && (
          <CardActions disableSpacing>
            <Button size="small" onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              {expanded ? 'Show Less' : 'Show More'}
            </Button>
          </CardActions>
        )}

        {expanded && (
          <CardContent>
            <>
              <Typography variant="h6" component="h4">
                Description
              </Typography>
              <Typography paragraph>{description}</Typography>

              <Typography variant="h6" component="h4">
                Related Content
              </Typography>

              {rdAttachedContentItems?.map((contentItem, contentIndex) => (
                <div>
                  <ItemDisplay key={contentItem.path} item={contentItem} showNavigableAsLinks={false} />
                </div>
              ))}

              <Typography variant="h6" component="h4">
                Related&nbsp;Documents&nbsp;&&nbsp;Assets
              </Typography>

              {rdAttachedDocuments?.map((document, docIndex) => (
                <div>
                  <Link href={document.url} target="_new" variant="body2">
                    {document.name}
                  </Link>
                </div>
              ))}
            </>
          </CardContent>
        )}
      </Card>

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

export default BoardCard;
