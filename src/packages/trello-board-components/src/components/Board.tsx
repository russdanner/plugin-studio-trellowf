import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
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
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import BoardCard from '/Users/rdanner/code/plugin-studio-trellowf/src/packages/trello-board-components/src/components/BoardCard';

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
      {
        id: string;
        name: string;
        cards: Record<string, { id: string; url: string; name: string; cover: { color: string }; desc: string }>;
      }
    >
  });

  const onDragEnd = (result) => {
    //if(!result.destination) return;
    //console.log(result)

    moveCard(result.destination.droppableId, result.draggableId);
  };

  const moveCard = (listId, cardId) => {
    let serviceUrl = `/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/card/move.json?siteId=${siteId}&listId=${listId}&cardId=${cardId}`;

    get(serviceUrl).subscribe({
      next: (response) => {
        loadBoardData();
      },
      error(e) {
        console.error(e);
        setError(
          e.response?.response ?? ({ code: '?', message: 'Unknown Error. Check browser console.' } as ApiResponse)
        );
      }
    });
  };

  const loadBoardData = () => {
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
    loadBoardData();
    let intervalRef = setInterval(() => {
      loadBoardData();
    }, 10000);
    return function () {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
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
          Object.values(state.lists).map((list) => {
            return (
              <Paper
                elevation={1}
                style={{}}
                sx={(theme) => ({
                  width: '280px',
                  display: 'inline-table',
                  margin: '5px',
                  p: 1,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey' : 'grey.A200'
                })}
              >
                <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                  {list.name}
                </Typography>

                <Droppable droppableId={list.id} key={list.id}>
                  {(provided, snapshot) => {
                    return (
                      <Box
                        sx={{ [`.${cardClasses.root}:not(:last-child)`]: { mb: 1 } }}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {list.cards &&
                          Object.values(list.cards).map((card, cardIndex) => {
                            return (
                              <Draggable key={card.id} draggableId={card.id} index={cardIndex}>
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <div style={{ padding: '5px' }}>
                                        <BoardCard
                                          cardId={card.id}
                                          cardName={card.name}
                                          trelloCardUrl={card.url}
                                          coverColor={card.cover.color}
                                          description={card.desc}
                                        />
                                      </div>
                                      {provided.placeholder}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                      </Box>
                    );
                  }}
                </Droppable>
              </Paper>
            );
          })}
      </Box>
    </DragDropContext>
  );
};

export default Board;
