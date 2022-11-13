import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { Typography, Link } from '@mui/material';

import ItemDisplay from '@craftercms/studio-ui/components/ItemDisplay';

import CardRecord from '../types/CardRecord';
import CardDetailsRecord from '../types/CardDetailsRecord';

export interface CardDetailsProps {
  card: CardRecord;
  cardDetails: CardDetailsRecord;
}

const CardDetails = ({ card, cardDetails }: CardDetailsProps) => {
  return (
    <>
      <Typography variant="h6" component="h4">
        Description
      </Typography>
      <Typography paragraph>{card.description}</Typography>

      <Typography variant="h6" component="h4">
        Related Content
      </Typography>
      {cardDetails.attachedContentItems?.map((contentItem, contentIndex) => (
        <div>
          <ItemDisplay key={contentItem.path} item={contentItem} showNavigableAsLinks={false} />
        </div>
      ))}

      <Typography variant="h6" component="h4">
        Related&nbsp;Documents&nbsp;&&nbsp;Assets
      </Typography>
      {cardDetails.attachedDocuments?.map((document, docIndex) => (
        <div>
          <Link href={document.url} target="_new" variant="body2">
            {document.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardDetails;
