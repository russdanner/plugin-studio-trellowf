import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { useDispatch } from 'react-redux';

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  cardClasses,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Badge
} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';

import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import { fetchSandboxItem, fetchItemsByPath } from '@craftercms/studio-ui/services/content';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';

import CardRecord from '../types/CardRecord';
import CardDetailsRecord from '../types/CardRecord';
import CardDetails from './CardDetails';
import BoardCardActions from './CardActions';

export interface BoardCardProps {
  card: CardRecord;
}

const BoardCard = ({ card }: BoardCardProps) => {
  const PLUGIN_SERVICE_BASE = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf';

  const dispatch = useDispatch();
  const [detailsOpen, setDetailsOpen] = React.useState(false);

  const siteId = useActiveSiteId();
  const [error, setError] = useState();
  const [state, setState] = useState();

  const [cardDetailsData, setCardDetailsData] = useState<any>({
    attachedContentItems: null,
    attachedDocuments: null,
    attachments: null
  });

  const loadCardDetailsData = () => {
    // why is this running for each card?
    if (card.badges.attachments === 0) {
      console.log('item has no attachements nothing load');
      return;
    }

    //otherwise get the details
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/details.json?siteId=${siteId}&cardId=${card.id}`;

    get(serviceUrl).subscribe({
      next: (response) => {
        // sort our our attachments vs everything else
        let details = response.response.result;

        let newCardDetailsAttachments = { ...cardDetailsData, attachments: details.attachments };
        setCardDetailsData(newCardDetailsAttachments);

        let contentItemPaths = [];
        let documentItems = [];

        details.attachments?.forEach(function (attachment) {
          let url = attachment.url;

          if (url.includes('contentId=')) {
            let path = url.substr(url.indexOf('contentId=') + 10);
            if (path.includes('&')) {
              path = path.substr(0, path.indexOf('&'));
            }

            if (path && path != 'undefined') {
              // why undefined?
              contentItemPaths[contentItemPaths.length] = path;
            }
          } else {
            documentItems[documentItems.length] = attachment;
          }
        });

        // now set the component state
        let newCardDetails = { ...newCardDetailsAttachments, attachedDocuments: documentItems };
        setCardDetailsData(newCardDetails);

        if (contentItemPaths.length > 0) {
          fetchItemsByPath(siteId, contentItemPaths, { castAsDetailedItem: true }).subscribe({
            next(sandboxItems) {
              newCardDetails = { ...newCardDetails, attachedContentItems: sandboxItems };
              setCardDetailsData(newCardDetails);
            }
          });
        }
      },
      error(e) {
        console.error(e);
        setError(
          e.response?.response ?? ({ code: '?', message: 'Unknown Error. Check browser console.' } as ApiResponse)
        );
      }
    });
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setDetailsOpen(true);
      loadCardDetailsData();
    } else {
      event.stopPropagation();
    }
  };

  const handleCardCloseClick = () => {
    setDetailsOpen(false);
  };

  const handleShowMoreClick = () => {
    if (!detailsOpen) {
      setDetailsOpen(true);
      loadCardDetailsData();
    }
  };

  const handleRemoveAttachment = (url) => {
    cardDetailsData.attachments?.forEach(function (attachment) {
      if (attachment.url.includes(url)) {
        let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/remove-attachment.json?siteId=${siteId}&cardId=${card.id}&attachmentId=${attachment.id}`;

        get(serviceUrl).subscribe({
          next: (response) => {
            loadCardDetailsData();
          },
          error(e) {
            console.error(e);
          }
        });
      }
    });
  };

  return (
    <>
      <Card elevation={3} sx={{ borderTop: card.cover.color ? `10px solid ${card.cover.color}` : `` }}>
        <CardHeader
          action={<BoardCardActions card={card} cardDetails={cardDetailsData} onMenuOpen={loadCardDetailsData} />}
          title={card.name}
          titleTypographyProps={{ variant: 'body1' }}
          onClick={(e) => {
            handleCardClick(e);
          }}
        />
        {card.badges.attachments > 0 && (
          <CardActions disableSpacing onClick={handleShowMoreClick}>
            <IconButton size="small" aria-label="cart">
              <Badge badgeContent={card.badges.attachments} color="primary">
                <AttachmentRoundedIcon />
              </Badge>
            </IconButton>
          </CardActions>
        )}
      </Card>

      <Dialog open={detailsOpen} aria-describedby="alert-dialog-slide-description">
        <DialogTitle sx={{ minWidth: '500px', backgroundColor: card.cover.color ? `${card.cover.color}` : `` }}>
          {card.name}
        </DialogTitle>
        <DialogContent>
          <CardDetails card={card} cardDetails={cardDetailsData} onRemoveAttachment={handleRemoveAttachment} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCardCloseClick}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BoardCard;
