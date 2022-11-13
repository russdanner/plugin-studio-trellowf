import * as React from 'react';

export interface CardDetailsRecord {
  attachedDocuments: Array<{
    id: string;
    name: string;
    url: string;
  }>;

  attachedContentItems: Array<any>;
}

export default CardDetailsRecord;
