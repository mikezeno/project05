import React, { useEffect, useState} from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Axios from 'axios'
import SideNav from './components/SideNav';
import Register from './components/Register';
import Login from './components/Login';
import AskQuestion from './components/AskQuestion';
import Question from './components/Question';
import Questions from './components/Questions';
import Answer from './components/Answer';
import Test from './components/Test';

function Main() {

  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />     
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route path="/questions" component={Questions} />
          <Route exact path="/question/ask" component={AskQuestion} />
          <Route path="/question/:id" render={(props) => <Question />} />
          <Route path="/answer/question/:id" render={(props) => <Answer />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Main;
