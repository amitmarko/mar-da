import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/home/Home';
import OurService from './components/pages/ourService/OurService';
import './App.css';
import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/ourService" component={OurService} />
          <Route path="/:jobId" render={() => <Redirect to="/" />} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
