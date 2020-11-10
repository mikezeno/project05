import React, { useEffect, useState} from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Axios from 'axios'
import Main from './Main';
import Landing from './components/Landing';
import Header from './components/Header';
import Login from './components/Login'
import Register from './components/Register'
import AskQuestion from './components/AskQuestion';
import Question from './components/Question';
import Questions from './components/Questions';
import Answer from './components/Answer';
import Test from './components/Test';
import Nav from './components/Nav';

function App() {

Axios.defaults.withCredentials = true;

const [loginStatus, setLoginStatus] = useState('');

useEffect(() => {
  Axios.get('/user/login').then( (resp) => {
    console.log('LoggedIn: ' + resp.data.loggedIn);
    if (resp.data.loggedIn === true) {
      setLoginStatus(resp.data.user[0].username);
    }
  });
}, [loginStatus])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav /> 
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
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

export default App;
