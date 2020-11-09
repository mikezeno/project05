import React, { useEffect, useState} from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Axios from 'axios'
import Register from './components/Register';
import Login from './components/Login';
import Main from './Main';
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
        <Nav />
        {loginStatus && <h1 className="page">Logged In</h1>}
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
