import * as React from 'react';
import { useEffect, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Box, Card, CardHeader, IconButton, Paper, Typography, cardClasses, Fab } from '@mui/material';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';

export interface BoardProps {
  boardId: string;
}

const Board = ({ boardId }: BoardProps) => {
  const siteId = useActiveSiteId();
  const [error, setError] = useState();
  const [state, setState] = useState({
    board: null,
    lists: null as Record<
      string,
      { name: string; cards: Record<string, { url: string; name: string; cover: { color: string } }> }
    >
  });
  const dataLoadChannels = () => {
    let serviceUrl = `/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/board/lists.json?siteId=${siteId}`;
    if (boardId) {
      serviceUrl += '&boardId=' + boardId;
    }
    get(serviceUrl).subscribe({
      next: (response) => {
        setState({
          ...state,
          board: { ...response.response.result.board },
          lists: { ...response.response.result.lists }
        });
      },
      error(e) {
        console.error(e);
        setError(
          e.response?.response ?? ({ code: '?', message: 'Unknown Error. Check browser console.' } as ApiResponse)
        );
      }
    });
  };

  useEffect(() => {
    dataLoadChannels();
    let intervalRef = setInterval(() => {
      dataLoadChannels();
    }, 10000);
    return function () {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: state.board ? `url(${state.board.prefs.backgroundImage})` : null,
        flexDirection: 'row',
        position: 'relative',
        height: '100%'
      }}
    >
      {error && <ApiResponseErrorState error={error} />}
      {state.board && (
        <Fab
          href={state.board.url}
          target="new"
          aria-label="Edit in Trello"
          sx={{ position: 'absolute', bottom: 20, right: 20 }}
          color="info"
        >
          <EditRoundedIcon />
        </Fab>
      )}
      {state.lists &&
        Object.values(state.lists).map((list) => (
          <Paper
            elevation={1}
            style={{}}
            sx={(theme) => ({
              width: '200px',
              display: 'inline-table',
              margin: '10px',
              p: 1,
              bgcolor: theme.palette.mode === 'dark' ? 'grey' : 'grey.A200'
            })}
          >
            <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
              {list.name}
            </Typography>
            <Box sx={{ [`.${cardClasses.root}:not(:last-child)`]: { mb: 1 } }}>
              {list.cards &&
                Object.values(list.cards).map((card) => (
                  <Card elevation={3} sx={{ borderTop: card.cover.color ? `10px solid ${card.cover.color}` : `` }}>
                    <CardHeader
                      action={
                        <IconButton href={card.url} target="card" aria-label="Edit in Trello">
                          <EditRoundedIcon />
                        </IconButton>
                      }
                      title={card.name}
                      titleTypographyProps={{ variant: 'body1' }}
                    />
                  </Card>
                ))}
            </Box>
          </Paper>
        ))}
    </Box>
  );
};

export default Board;
