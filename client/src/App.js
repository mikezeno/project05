import React, { useEffect, useState } from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios'
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import FrontPage from './pages/FrontPage';
import QuestionEdit from './pages/QuestionEdit';
import QuestionList from './pages/QuestionList';
import TestLogin from './pages/TestLogin';
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import ExplorePage from './pages/ExplorePage';
import QuestionPage from './pages/QuestionPage';
import AskQuestion from './pages/AskQuestion';
import HomePage from './pages/HomePage';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { userReducer } from './redux/Reducers/userReducer';

// redux store
var store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  Axios.defaults.withCredentials = true;

  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    Axios.get('/user/login').then((resp) => {
      console.log('LoggedIn: ' + resp.data.loggedIn);
      if (resp.data.loggedIn === true) {
        setLoginStatus(resp.data.user[0].username);
      }
    });
  }, [loginStatus])


  const AppLayout = ({ match }) => {
    return (
      <div className="user-layout">
        <aside>
          <NavMenu />
        </aside>
        <main>
          <Switch>
             <Route path="/app/home" exact component={HomePage} />
            <Route path="/app/explore" component={ExplorePage} />
            <Route path="/app/category/:catid" component={QuestionList} />
            <Route path="/app/question/:id/answer" component={QuestionPage} />
            <Route path="/app/question/:id" component={QuestionPage} />
            <Route path="/app/edit/:id" component={QuestionEdit} />
            <Route path="/app/ask" component={AskQuestion} />
            <Redirect to={`/app/home`} />
            {/* <Route exact path={props.match.path} component={HomePage} />
            <Route path={`${match.path}/add`} component={AddUserPage} />
            <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />
            <Route path={`${match.path}/:userId`} component={UserProfilePage} />
            <Redirect to={`${match.url}`} /> */}
          </Switch>
        </main>
      </div>
    )
  }

  const AuthLayout = (props) => (
    <div className="user-sub-layout">
      <div className="primary-content">
        <Switch>
          <Route path="/auth/front" component={FrontPage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/testlogin" component={TestLogin} />
          <Route path="/auth/register" component={Register} />
          <Redirect to="/auth/front" />
        </Switch>
      </div>
    </div>
  )

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/app" component={AppLayout} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
