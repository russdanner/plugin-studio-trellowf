import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { showSystemNotification } from '@craftercms/studio-ui/state/actions/system';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

function A(props) {
  const {
    match: { params },
    location: { search }
  } = props;
  const searchArgs = new URLSearchParams(search);
  return (
    <Box>
      <Link to="/">Back</Link>
      <Typography variant="h3">This is view A</Typography>
      <Typography>
        {params.arg1 ? `Url argument supplied was "${params.arg1}"` : 'No url arguments supplied'}
      </Typography>
      <Typography>
        {searchArgs.has('test')
          ? `Search argument 'test' was "${searchArgs.get('test')}"`
          : 'Search argument "test" not supplied'}
      </Typography>
    </Box>
  );
}

function B() {
  return (
    <Box>
      <Link to="/">Back</Link>
      <Typography variant="h3">This is view B</Typography>
    </Box>
  );
}

function Index() {
  const dispatch = useDispatch();
  const showSnack = () => {
    dispatch(showSystemNotification({ message: 'Hello, World', options: { variant: 'info' } }));
  };
  return (
    <>
      <Button onClick={showSnack}>Show Snack</Button>
      <List>
        <ListItem>
          <Link to="/a">Go to A</Link>
        </ListItem>
        <ListItem>
          <Link to="/a/and-then?test=and%20theeeeen%3F">Go to A with argument</Link>
        </ListItem>
        <ListItem>
          <Link to="/b">Go to B</Link>
        </ListItem>
      </List>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/a/:arg1?" component={A} />
        <Route path="/b" component={B} />
        <Route path="/" exact component={Index} />
      </Switch>
    </HashRouter>
  );
}

export default App;
