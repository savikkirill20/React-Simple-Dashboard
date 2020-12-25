import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Layout from './components/Layout';
import Nav from './components/Nav';

import Authorized from './components/Authorized';
import AuthBase from './containers/AuthBase';
import Logout from './containers/AuthBase/Logout';
import Homepage from './pages-samples/Homepage';
import Journeys from './pages-samples/Journeys';
import Actions from './pages-samples/Actions';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Route exact path="/auth/logout">
        <Logout />
      </Route>
      <Route path="/auth">
        <AuthBase />
      </Route>
      <Layout>
        <Layout.Sidebar>
          <Nav />
        </Layout.Sidebar>
        <Layout.Main>
          <Switch>
            <Authorized>
              <Route path="/journeys">
                <Journeys />
              </Route>
              <Route path="/actions">
                <Actions />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Authorized>
          </Switch>
        </Layout.Main>
      </Layout>
    </Router>
  );
}

export default App;
