import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './index.css';
import todoApp from './reducers'
import App from './App';
import 'semantic-ui-css/semantic.min.css';

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store=(store)>
    <App />
  </Provider>,
  document.getElementById('root')
);
