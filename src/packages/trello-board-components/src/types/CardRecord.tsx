import * as React from 'react';

export interface CardRecord {
  id: string;
  name: string;
  url: string;
  cover: { color: string };
  desc: string;
  badges: {
    attachments: number;
  };
}

export default CardRecord;
