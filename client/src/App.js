import React from 'react';
import './style/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './pages/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/blog" render={(props) => <Blog />} />
          <Route path="/createpost" render={(props) => <CreatePost />} />
          <Route path="/register" render={(props) => <Register />} />
          <Route path="/post/:id" render={(props) => <Post />} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
