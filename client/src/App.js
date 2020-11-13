import React, { useEffect, useState } from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios'
import Header from './components/Header';
import { useDispatch } from 'react-redux'
import { userLoggedIn } from './redux/Actions/userActions';
import { AuthLayout } from './Layouts/AuthLayout';
import { AppLayout } from './Layouts/AppLayout';

const App = (props) => {

  Axios.defaults.withCredentials = true;

  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    Axios.get('/user/login').then((resp) => {
      console.log('LoggedIn: ' + resp.data.loggedIn);
      if (resp.data.loggedIn === true) {
        console.log(resp.data.user[0].username + ': Session Logged')
        setLoginStatus(resp.data.user[0].id);
      }
    });
  }, [loginStatus])


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/app" component={AppLayout} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
