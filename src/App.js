import React from 'react';
import {MyProvider} from './context'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import UsersList from './components/UsersList'
import UserInfo from './components/UserInfo'
import Error from './components/Error'

import './App.css';

function App() {
  return (
    <MyProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route exact path="/user-info/:id" component={UserInfo} />
          <Route component={Error}/>
        </Switch>
      </Router>
    </MyProvider>
  );
}

export default App;
