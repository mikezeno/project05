import React, { useEffect, useState } from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios'
import Login from './pages/Login';
import Register from './pages/Register';
import Public from './pages/Public';
import AddAnswer from './pages/AddAnswer';
import AddQuestion from './pages/AddQuestion';
import Question from './pages/Question';
import QuestionList from './pages/QuestionList';
import TestLogin from './pages/TestLogin';
import NavMenu from './pages/NavMenu';
import Header from './pages/Header';
import Explore from './pages/Explore';
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
            <Route path="/app/answer/question/:id" component={AddAnswer} />
            <Route path="/app/question/add" component={AddQuestion} />
            <Route path="/app/question/:id" component={Question} />
            <Route path="/app/ask" component={AddQuestion} />
            <Route path="/app/testlogin" component={TestLogin} />
            <Route path="/app/questions" component={QuestionList} />
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
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/public" component={Public} />
          <Redirect to="/auth/login" />
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
