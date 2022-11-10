import * as React from 'react';
import { useEffect, useState } from 'react';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import { Paper, Typography } from '@mui/material';

export interface CardDetailsProps {
  siteId: string;
  cardId: string;
}

//const [state, setState] = useState({
//   attachments: null as Record<
//     string,
//     {
//       id: string;
//       type: string;
//       name: string;
//       url: string;
//     }
//   >
// });

const CardDetails = ({ siteId, cardId }: CardDetailsProps) => {
  // const loadCardDetailsData = () => {
  //   let serviceUrl = `/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/card/details.json?siteId=${siteId}&cardId=${cardId}`;

  //   get(serviceUrl).subscribe({
  //     next: (response) => {
  //       setState({
  //         //...state,
  //         //attachments: { ...response.response.result.attachments }
  //       });
  //     },
  //     error(e) {
  //       console.error(e);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   loadCardDetailsData();
  // }, []);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Attachements
      </Typography>
      <p>Design briefs or whatever</p>

      <Typography variant="h6" component="h2">
        Related Content
      </Typography>
      <p>WF Crafter Content Item (:)</p>

      <Typography variant="h6" component="h2">
        Comments
      </Typography>
      <p>This is Rad</p>
    </div>
  );
};

export default CardDetails;
