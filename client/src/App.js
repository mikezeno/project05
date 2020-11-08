import React from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './pages/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import AskQuestion from './pages/AskQuestion';
import Question from './pages/Question';
import Questions from './pages/Questions';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/question/ask" component={AskQuestion} />
          <Route path="/register" render={(props) => <Register />} />
          <Route path="/question/:id" render={(props) => <Question />} />
          <Route path="/questions" render={(props) => <Questions />} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
