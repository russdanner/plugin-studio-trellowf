import * as React from 'react';

export interface CardRecord {
  id: string;
  name: string;
  url: string;
  cover: { color: string };
  description: string;
  badges: {
    attachments: number;
  };
}

export default CardRecord;
