import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
//import { reducer } from './redux/reducers';


// var store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
  document.getElementById('root')
);
