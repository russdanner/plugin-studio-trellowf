import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { createCustomDocumentEventListener } from '@craftercms/studio-ui/utils/dom';
import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';
import BoardCard from './BoardCard';
import CardRecord from '../types/CardRecord';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export interface BoardProps {
  boardId: string;
}

const Board = ({ boardId }: BoardProps) => {
  const palette = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    cyan: 'cyan',
    lime: 'lime',
    gray: 'gray',
    orange: 'orange',
    purple: 'purple',
    black: 'black',
    pink: 'pink'
  };

  const siteId = useActiveSiteId();
  const [error, setError] = useState();

  const [createCardOpen, setCreateCardOpen] = React.useState(false);

  const [newCardTitle, setNewCardTitle] = React.useState('New Card');
  const [newCardDescription, setNewCardDescription] = React.useState('');
  const [newCardColor, setNewCardColor] = React.useState('red');
  const [newCardList, setNewCardList] = React.useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCardTitle(event.target.value as string);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCardDescription(event.target.value as string);
  };

  const handleColorChange = (event: SelectChangeEvent) => {
    setNewCardColor(event.target.value as string);
  };

  let hooked = false;
  const setHooked = (b) => {
    hooked = b;
  };

  //const [hooked, setHooked] = React.useState(false);
  const [hookedSuccess, setHookedSuccess] = React.useState(true);

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

  const handleCreateCard = () => {
    addCardToList(newCardList, newCardTitle, newCardDescription, newCardColor);
    setCreateCardOpen(false);
  };

  const handleAddCardToList = (listId) => {
    setNewCardList(listId);
    setCreateCardOpen(true);
  };

  const handleAddCardToListCancel = () => {
    setCreateCardOpen(false);
  };

  const addCardToList = (listId, title, desc, color) => {
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/card/create.json?siteId=${siteId}&listId=${listId}&title=${title}&description=${desc}&color=${color}`;
    get(serviceUrl).subscribe({
      next: (response) => {
        loadBoardData();
      },
      error(e) {
        console.error(e);
      }
    });
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

  const hookBoardNotifications = (boardId) => {
    if (hooked === false && hookedSuccess === true) {
      console.log('hooking board notificaitons hooked: [' + hooked + '] hookedSuccess [' + hookedSuccess + ']');

      if (window.location.hostname.includes('localhost')) {
        console.log('Board events cannot be recieved on localhost');
        setHooked(true); // Do not try and hook the board
        setHookedSuccess(false); // show notice and refresh button
      } else {
        const serverAddress = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

        let serviceUrl = `${PLUGIN_SERVICE_BASE}/admin/sethook.json?siteId=${siteId}&boardId=${boardId}&server=${serverAddress}`;

        get(serviceUrl).subscribe({
          next: (response) => {
            console.log('Set hook for board complete');
            setHooked(true);
            setHookedSuccess(true);
          },
          error(e) {
            setHooked(true);
            setHookedSuccess(false); // show notice and refresh button
            console.log('Set hook for board failed');
            console.error(e);
          }
        });
      }
    }
  };

  const refreshBoard = () => {
    clearBoardDataCache();
  };

  const clearBoardDataCache = () => {
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/cache/clear.json?siteId=${siteId}`;

    get(serviceUrl).subscribe({
      next: (response) => {},
      error(e) {
        console.error(e);
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

        hookBoardNotifications(response.response.result.board.id);
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
      // poll often. there is a cache on the server
      // polling often lets us pick up hooked updates quickly
      loadBoardData();
    }, 5000);
    return function () {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <>
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
            <>
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
              <Fab
                onClick={refreshBoard}
                aria-label="Refresh Board"
                sx={{ position: 'fixed', bottom: 60, right: 150 }}
                color="info"
              >
                <RefreshRoundedIcon />
              </Fab>
            </>
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
                          <Button
                            size="small"
                            aria-label="add card"
                            onClick={() => {
                              handleAddCardToList(list.id);
                            }}
                          >
                            Add a Card
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

      <Dialog open={createCardOpen} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>Create Card</DialogTitle>
        <DialogContent>
          <FormControl margin="normal" fullWidth>
            <TextField
              defaultValue="New Card"
              onChange={handleTitleChange}
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <TextField
              defaultValue="A description"
              onChange={handleDescriptionChange}
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
          </FormControl>
          {/*          <FormControl margin="normal" fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newCardColor}
              label="Color"
              onChange={handleColorChange}
            >
              {palette &&
                Object.keys(palette).map((color, colorIndex) => {
                  return (
                    <MenuItem sx={{ backgroundColor: color, color: 'white' }} value={color}>
                      {color}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCardToListCancel}>Cancel</Button>
          <Button onClick={handleCreateCard}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Board;
