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
  Fab,
  Button
} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { createCustomDocumentEventListener } from '@craftercms/studio-ui/utils/dom';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import BoardCard from './BoardCard';
import CardRecord from '../types/CardRecord';

export interface BoardProps {
  boardId: string;
}

const Board = ({ boardId }: BoardProps) => {
  const siteId = useActiveSiteId();
  const [error, setError] = useState();

  const [state, setState] = useState({
    board: null,
    lists: null as Array<{
      id: string;
      name: string;
      cards: Array<CardRecord>;
    }>
  });

  const PLUGIN_SERVICE_BASE = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf';

  createCustomDocumentEventListener('TRELLO_CARD_UPDATE', (response) => {
    alert('stuff happened');
    loadBoardData();
  });

  const onDragEnd = (result) => {
    const cardId = result.draggableId;
    const targetListIdIndex = result.destination.index;
    const targetListId = result.destination.droppableId;
    const sourceListIndex = result.source.index;
    const sourceListId = result.source.droppableId;

    // guard on no move
    if (sourceListId === targetListId && sourceListIndex == targetListIdIndex) return;

    moveCard(cardId, sourceListId, targetListId, targetListIdIndex);
  };

  const moveCard = (cardId, sourceListId, targetListId, targetListIdIndex) => {
    // update the board data locally
    let sourceList = state.lists.find((list) => {
      return list.id === sourceListId;
    });
    let targetList = state.lists.find((list) => {
      return list.id === targetListId;
    });
    // @ts-ignore
    let card = sourceList.cards.find((card) => {
      return card.id === cardId;
    });

    // @ts-ignore
    sourceList.cards = sourceList.cards.filter((curCard) => curCard.id != cardId);
    // @ts-ignore
    targetList.cards.splice(targetListIdIndex, 0, card);

    // Update the card on the server
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/move.json?siteId=${siteId}&listId=${targetListId}&cardId=${cardId}`;

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
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/board/lists.json?siteId=${siteId}`;
    if (boardId) {
      serviceUrl += '&boardId=' + boardId;
    }

    get(serviceUrl).subscribe({
      next: (response) => {
        setState({
          ...state,
          board: response.response.result.board,
          lists: response.response.result.lists
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
    // let intervalRef = setInterval(() => {
    //   loadBoardData();
    // }, 10000);
    // return function () {
    //   clearInterval(intervalRef);
    // };
  }, []);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <Box
        sx={{
          backgroundImage: state.board ? `url(${state.board.prefs.backgroundImage})` : null,
          flexDirection: 'row',
          position: 'relative',
          width: '300%;',
          height: '500%'
        }}
      >
        {error && <ApiResponseErrorState error={error} />}
        {state.board && (
          <Fab
            onClick={loadBoardData}
            href={state.board.url}
            target="new"
            aria-label="Open Board in Trello"
            sx={{ position: 'fixed', bottom: 60, right: 50 }}
            color="info"
          >
            <EditRoundedIcon />
          </Fab>
        )}
        {state.lists &&
          state.lists.map((list) => {
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
                                        <BoardCard card={card} />
                                      </div>
                                      {provided.placeholder}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                        <div style={{ height: snapshot.isDraggingOver ? '120px' : '80px' }}>&nbsp;</div>
                        <Button size="small" aria-label="add card">
                          Add Card
                        </Button>
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
