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
import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn, userLoggedOut } from './redux/Actions/userActions';

function App() {

  Axios.defaults.withCredentials = true;

  const dispatch = useDispatch();
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


 function SetSession (id) {
    dispatch(userLoggedIn(id));
  }

  const AppLayout = ({ match }) => {
    return (
      <div className="user-layout">
        <aside>
          <NavMenu />
        </aside>
        <main>
          <Switch>
            {/* <Route path="/app/home" exact component={HomePage} />
            <Route path="/app/explore" component={ExplorePage} />
            <Route path="/app/category/:catid" component={QuestionList} />
            <Route path="/app/question/:id/answer" component={QuestionPage} />
            <Route path="/app/question/:id" component={QuestionPage} />
            <Route path="/app/edit/:id" component={QuestionEdit} />
            <Route path="/app/ask" component={AskQuestion} /> */}
          
            <Route exact path={match.path} exact component={HomePage} />
            <Route path={`${match.path}/explore`} exact component={ExplorePage} />
            <Route path={`${match.path}/ask`} exact component={AskQuestion} />
            <Route path={`${match.path}/category/:catid`} children={ <QuestionList/>} />
            <Route path={`${match.path}/question/:id/answer`} component={QuestionPage} />
            <Route path={`${match.path}/question/:id`} component={QuestionPage} />
            <Route path={`${match.path}/edit/:id`} component={QuestionEdit} />
            <Redirect to={`${match.url}`} /> 
       
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
