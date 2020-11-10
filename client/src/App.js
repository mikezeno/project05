import React, { useEffect, useState} from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Axios from 'axios'
import Main from './Main';
import Landing from './components/Landing';
import Header from './components/Header';
import Login from './components/Login'
import Register from './components/Register'

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
        {loginStatus && <h1 className="page">Logged In</h1>}
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
