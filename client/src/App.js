import React, { useEffect, useState } from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios'
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import FrontPage from './pages/FrontPage';
import AddQuestion from './pages/AddQuestion';
import QuestionEdit from './pages/QuestionEdit';
import QuestionList from './pages/QuestionList';
import TestLogin from './pages/TestLogin';
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import Explore from './pages/ExplorePage';
import QuestionPage from './pages/QuestionPage';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
// import { reducer } from './redux/reducers';

// Layouts
// import UnauthorizedLayout from './layouts/PublicLayout'
// import PrimaryLayout from './layouts/UserLayout'

// redux store
// var store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

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
            <Route path="/app/questions/:catid" component={QuestionList} />
            <Route path="/app/question/edit/:id" component={QuestionEdit} />
            <Route path="/app/question/add" component={AddQuestion} />
            <Route path="/app/question/answer/:id" component={QuestionPage} />
            <Route path="/app/question/:id" component={QuestionPage} />
            
            
            <Route path="/app/explore" component={Explore} />
            <Redirect to={`${match.url}`} />
            {/* <Route exact path={props.match.path} component={BrowseUsersPage} />
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

  // const OldRoutes = () => (
  //   <div className="primary-layout">
  //     <header>
  //       <Header />
  //       <Route path="/users" component={NavMenu} />
  //     </header>
  //     <main>
  //       <Switch>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/answer/question/:id" render={(props) => <Answer />} />
  //         <Route path="/question/:id" render={(props) => <Question />} />
  //         <Route path="/ask" component={AskQuestion} />
  //         <Route path="/login" component={Login} />
  //         <Route path="/register" component={Register} />
  //         <Route path="/test" component={Test} />
  //         <Route path="/questions" component={Questions} />
  //         <Redirect to='/' />
  //       </Switch>
  //     </main>
  //   </div>
  // )

  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/app" component={AppLayout} />
          {/* <AuthorizedRoute path="/app" component={PrimaryLayout} /> */}
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
