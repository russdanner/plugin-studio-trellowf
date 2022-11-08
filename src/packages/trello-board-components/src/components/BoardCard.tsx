import * as React from 'react';
import { useEffect, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

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
  cardName: string;
  trelloCardUrl: string;
  coverColor: string;
  description: string;
}

const BoardCard = ({ cardName, trelloCardUrl, coverColor, description }: BoardCardProps) => {
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
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
          <IconButton aria-label="settings">
            <MoreVertRoundedIcon />
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
