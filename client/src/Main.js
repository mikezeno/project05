import React, { useEffect, useState} from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import AskQuestion from './components/AskQuestion';
import Question from './components/Question';
import Questions from './components/Questions';
import Answer from './components/Answer';
import Test from './components/Test';
import Nav from './components/Nav';

function Main() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />     
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/questions" component={Questions} />
          <Route path="/question/ask" component={AskQuestion} />
          <Route path="/question/:id" render={(props) => <Question />} />
          <Route path="/answer/question/:id" render={(props) => <Answer />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Main;
