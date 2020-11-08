import React from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './pages/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import AskQuestion from './pages/AskQuestion';
import Question from './pages/Question';
import Questions from './pages/Questions';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/questions" component={Questions} />
          <Route exact path="/question/ask" component={AskQuestion} />
          <Route path="/question/:id" render={(props) => <Question />} />
          <Route path="/answer/question/:id" render={(props) => <Answer />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
