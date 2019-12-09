import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import UserProfile from './pages/UserProfile'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Container maxWidth='xl'>
      <Navbar />
    <Switch>
      <Route exact path="/home" component={Homepage}/>
      <Route path="/userProfile/:id" component={UserProfile}/>
    </Switch>
    </Container>
  );
}

export default App;
