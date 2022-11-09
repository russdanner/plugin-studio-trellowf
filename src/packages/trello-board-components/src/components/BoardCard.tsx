import * as React from 'react';
import { useEffect, useState } from 'react';
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
  showNewContentDialog
} from '@craftercms/studio-ui/state/actions/dialogs';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import { lookupItemByPath } from '@craftercms/studio-ui/utils/content';
import { useItemsByPath } from '@craftercms/studio-ui/hooks/useItemsByPath';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';

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
  Fab
} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export interface BoardCardProps {
  cardId: string;
  cardName: string;
  trelloCardUrl: string;
  coverColor: string;
  description: string;
  attachmentCount: number;
}

const BoardCard = ({ cardId, cardName, trelloCardUrl, coverColor, description, attachmentCount }: BoardCardProps) => {
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const siteId = useActiveSiteId();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

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
    setAnchorEl(null);
  };

  const handleCreateContent = () => {
    dispatch(
      showNewContentDialog({
        item: lookupItemByPath('/', useItemsByPath()),
        // @ts-ignore - required attributes of `showEditDialog` are submitted by new content dialog `onContentTypeSelected` callback and injected into the showEditDialog action by the GlobalDialogManger
        onContentTypeSelected: showEditDialog({})
      })
    );

    // TODO: once created attach it to the card
    //newContentCreationComplete

    setAnchorEl(null);
  };

  const handleAttachContent = () => {
    // dispatch(
    //   showNewContentDialog({
    //     item: lookupItemByPath('/', items),
    //     // @ts-ignore - required attributes of `showEditDialog` are submitted by new content dialog `onContentTypeSelected` callback and injected into the showEditDialog action by the GlobalDialogManger
    //     onContentTypeSelected: showEditDialog({})
    //   })
    // );
    //attachContent('test', useActiveSiteId(), cardId, '/site/website/index.xml');
    attachContent('test', siteId, cardId, '/site/website/index.xml');

    setAnchorEl(null);
  };

  const handleSubmitContent = () => {
    alert('Submit ' + cardId);
    setAnchorEl(null);
  };

  const handleRejectContent = () => {
    alert('Reject ' + cardId);
    setAnchorEl(null);
  };

  const handlePublishContent = () => {
    alert('Publish ' + cardId);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  let TrelloCardActions = <></>;

  if (description || attachmentCount > 0) {
    TrelloCardActions = (
      <div>
        <CardActions disableSpacing>
          <div onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreRoundedIcon />
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </div>
    );
  }

  return (
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
              <MenuItem key="createContent" onClick={handleCreateContent}>
                Create New Content
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
          </IconButton>
        }
        title={cardName}
        titleTypographyProps={{ variant: 'body1' }}
      />

      {TrelloCardActions}
    </Card>
  );
};

export default BoardCard;
