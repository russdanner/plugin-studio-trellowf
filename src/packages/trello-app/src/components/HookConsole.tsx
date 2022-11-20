import * as React from 'react';
import { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import GlobalState from '@craftercms/studio-ui/models/GlobalState';
import {
  blockUI,
  showSystemNotification,
  showEditItemSuccessNotification,
  unblockUI
} from '@craftercms/studio-ui/state/actions/system';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PhishingRoundedIcon from '@mui/icons-material/PhishingRounded';

import { batchActions } from '@craftercms/studio-ui/state/actions/misc';
import { useSelection } from '@craftercms/studio-ui/hooks/useSelection';

import { reloadDetailedItem } from '@craftercms/studio-ui/state/actions/content';
import { showEditDialog, showPreviewDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { isImage } from '@craftercms/studio-ui/utils/content';
//import { isPreviewable, isVideo } from '@craftercms/studio-ui/components/PathNavigator/utils';
import { fetchSandboxItem } from '@craftercms/studio-ui/services/content';

import useActiveSiteId from '@craftercms/studio-ui/hooks/useActiveSiteId';
import { get } from '@craftercms/studio-ui/utils/ajax';
import { ApiResponse, ApiResponseErrorState } from '@craftercms/studio-ui';

export interface HookConsoleProps {}

const HookConsole = ({}: HookConsoleProps) => {
  const PLUGIN_SERVICE_BASE = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf';

  const siteId = useActiveSiteId();

  const [addHookOpen, setAddHookOpen] = React.useState(false);

  const [hooks, setHooks] = useState({
    items: null as Array<{
      id: string;
      description: string;
      callbackURL: string;
      active: Boolean;
    }>
  });

  const loadHooksData = () => {
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/admin/list-hooks.json?siteId=${siteId}`;

    get(serviceUrl).subscribe({
      next: (response) => {
        setHooks({
          ...hooks,
          items: response.response.result
        });
      },
      error(e) {
        console.error(e);
      }
    });
  };

  const deleteHook = (id) => {
    let serviceUrl = `${PLUGIN_SERVICE_BASE}/admin/delete-hook.json?siteId=${siteId}&id=${id}`;

    get(serviceUrl).subscribe({
      next: (response) => {
        loadHooksData();
      },
      error(e) {
        console.error(e);
      }
    });
  };

  const handleDeleteHook = (id) => {
    deleteHook(id);
  };

  const handleNewHook = () => {
    setAddHookOpen(true);
  };

  const handleCloseDialog = () => {
    setAddHookOpen(false);
  };

  const handleSubmitAddHook = (id) => {
    const description = document.getElementById('hook-description');
    alert('This operation is not supported at this time. Hooks are automatically added for each board.');
    setAddHookOpen(false);
  };

  useEffect(() => {
    loadHooksData();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', margin: '50px auto' }}>
        <img style={{ width: '300px' }} src="/studio/static-assets/images/content_creation.svg" />
        <h1>CrafterCMS ❤ Trello</h1>
        <List>
          {hooks.items &&
            Object.values(hooks.items).map((hook, hookIndex) => {
              return (
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {
                        handleDeleteHook(hook.id);
                      }}
                    >
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar color="blue">
                      <PhishingRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={hook.description} secondary={hook.callbackURL} />
                </ListItem>
              );
            })}
        </List>
        {/*        <IconButton edge="start" aria-label="new" onClick={handleNewHook}>
          <AddRoundedIcon />
        </IconButton>
*/}{' '}
      </div>

      <Dialog open={addHookOpen} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>Add Hook</DialogTitle>
        <DialogContent>
          <TextField id="hook-description" label="Hook Description" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmitAddHook}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HookConsole;
