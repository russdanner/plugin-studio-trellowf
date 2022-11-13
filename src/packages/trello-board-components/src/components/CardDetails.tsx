import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Typography, Link } from '@mui/material';

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import ItemDisplay from '@craftercms/studio-ui/components/ItemDisplay';

import CardRecord from '../types/CardRecord';
import CardDetailsRecord from '../types/CardDetailsRecord';

export interface CardDetailsProps {
  card: CardRecord;
  cardDetails: CardDetailsRecord;
}

const dense = true;
const showAttachmentPath = true;

const CardDetails = ({ card, cardDetails }: CardDetailsProps) => {
  const handleRemoveAttachment = (event: React.MouseEvent<HTMLElement>) => {
    alert('yoink');
  };
  console.log(card);
  return (
    <>
      <Typography variant="h6" component="h4">
        Description
      </Typography>
      <Typography paragraph>{card.desc}</Typography>

      <Typography variant="h6" component="h4">
        Related Content
      </Typography>
      <List dense={dense}>
        {cardDetails.attachedContentItems?.map((contentItem, contentIndex) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="remove attachment" onClick={handleRemoveAttachment}>
                <ClearRoundedIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={<ItemDisplay key={contentItem.path} item={contentItem} showNavigableAsLinks={false} />}
              secondary={showAttachmentPath ? contentItem.path : null}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" component="h4">
        Related&nbsp;Documents&nbsp;&&nbsp;Assets
      </Typography>
      <List dense={dense}>
        {cardDetails.attachedDocuments?.map((document, docIndex) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="remove attachment" onClick={handleRemoveAttachment}>
                <ClearRoundedIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={
                <Link href={document.url} target="_new" variant="body2">
                  {document.name}
                </Link>
              }
              secondary={null}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CardDetails;
