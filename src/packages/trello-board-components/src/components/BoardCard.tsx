import * as React from 'react';
import { useEffect, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
}

const BoardCard = ({ cardId, cardName, trelloCardUrl, coverColor, description }: BoardCardProps) => {
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const [expanded, setExpanded] = React.useState(false);

  const ITEM_HEIGHT = 48;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardActionsClose = () => {
    setAnchorEl(null);
  };

  const handleCreateContent = () => {
    alert('Create Content ' + cardId);
    handleCardActionsClose();
  };

  const handleAttachContent = () => {
    alert('Attach Content to card ' + cardId);
    handleCardActionsClose();
  };

  const handleSubmitContent = () => {
    alert('Submit ' + cardId);
    handleCardActionsClose();
  };

  const handleRejectContent = () => {
    alert('Reject ' + cardId);
    handleCardActionsClose();
  };

  const handlePublishContent = () => {
    alert('Publish ' + cardId);
    handleCardActionsClose();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  let TrelloCardActions = <></>;

  if (description) {
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
