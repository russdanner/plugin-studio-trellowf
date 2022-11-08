import * as React from 'react';
import { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import GlobalState from '@craftercms/studio-ui/models/GlobalState';
import {
  blockUI,
  showSystemNotification,
  showEditItemSuccessNotification,
  unblockUI
} from '@craftercms/studio-ui/state/actions/system';
import { batchActions } from '@craftercms/studio-ui/state/actions/misc';
import { useSelection } from '@craftercms/studio-ui/hooks/useSelection';

import { reloadDetailedItem } from '@craftercms/studio-ui/state/actions/content';
import { showEditDialog, showPreviewDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { isImage } from '@craftercms/studio-ui/utils/content';
import { fetchSandboxItem } from '@craftercms/studio-ui/services/content';

function handlePreviewRequest(sandboxItem, { siteId, contentId, authoringBase, dispatch }) {
  if (sandboxItem.systemType === 'page') {
    // content item is a page
    let pageUrl = contentId.replace('/site/website/', '').replace('index.xml', '').replace('.xml', '.html');
    window.location.href = '/studio/preview#/?page=' + pageUrl + '&site=' + siteId;
  } else if (contentId.indexOf('/site/') != -1) {
    // content item is a component
    dispatch(
      showEditDialog({
        site: siteId,
        path: contentId,
        authoringBase: authoringBase,
        readonly: true
      })
    );
  } else if (contentId.indexOf('/static-assets/') != -1) {
    // content item is a component
    if (
      contentId.indexOf('.png') != -1 ||
      contentId.indexOf('.gif') != -1 ||
      contentId.indexOf('.jpg') != -1 ||
      contentId.indexOf('.jpeg') != -1 ||
      contentId.indexOf('.svg') != -1 ||
      contentId.indexOf('.webp') != -1
    ) {
      // invoke isImage
      window.craftercms.getStore().dispatch(
        showPreviewDialog({
          site: siteId,
          type: 'image',
          url: contentId,
          authoringBase: window.craftercms.getStore().getState().env.authoringBase
        })
      );
    } else if (contentId.indexOf('.mp4') != -1) {
      //  invoke isVideo
      window.craftercms.getStore().dispatch(
        showPreviewDialog({
          site: siteId,
          type: 'video',
          url: contentId,
          authoringBase: window.craftercms.getStore().getState().env.authoringBase
        })
      );
    } else {
      // assume it's just a file of sorts
      // what can I call to clean up these decisions?
      window.craftercms.getStore().dispatch(
        showPreviewDialog({
          site: siteId,
          type: 'editor',
          url: contentId,
          authoringBase: window.craftercms.getStore().getState().env.authoringBase
        })
      );
    }
  }
}

function TrelloAppPage(props) {
  return (
    <div style={{ textAlign: 'center', margin: '50px auto' }}>
      <img src="/studio/static-assets/images/content_creation.svg" />
      <h1>CrafterCMS ❤ Trello</h1>
      <h3>{props.message}</h3>
    </div>
  );
}

function Preview(props) {
  // example url:
  // <STUDIO_SERVE>/studio/plugin?site=t5&type=apps&pluginId=org.rd.plugin.trellowf&name=trellowf&file=cb2.js#/preview?contentId=/site/website/crafter-level-descriptor.level.xml
  const {
    match: { params },
    location: { search }
  } = props;

  const searchArgs = new URLSearchParams(search);
  const contentId = searchArgs.get('contentId');
  const siteId = searchArgs.get('siteId');
  const dispatch = useDispatch();
  const authoringBase = useSelection((state) => state.env.authoringBase);

  const [item, setItem] = useState(null);

  useEffect(() => {
    let params = { siteId, contentId, authoringBase, dispatch };

    fetchSandboxItem(siteId, contentId, { castAsDetailedItem: true }).subscribe({
      next(sandboxItem) {
        setItem(sandboxItem);
        handlePreviewRequest(sandboxItem, params);
      },
      error() {}
    });
  }, [siteId, contentId, authoringBase, dispatch]);

  return <TrelloAppPage message="OOPS! We don't recognize your preview request" />;
}

function Index() {
  return (
    <>
      <TrelloAppPage message="OOPS! We don't recognize your request" />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/preview/:arg1?" component={Preview} />
        <Route path="/" exact component={Index} />
      </Switch>
    </HashRouter>
  );
}

export default App;
