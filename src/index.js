import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import './static/css/index.css';
import App from './app/App';

ReactDOM.render(
  <BrowserRouter>
    <Provider
      store={createStore(reducers)}>
      <App/>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);