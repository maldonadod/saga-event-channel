import React from 'react'
import "babel-core/register";
import "babel-polyfill";
import store from './store'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
