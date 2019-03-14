import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'

import state from './store/state.json'
import store from './store'
import { getBlocks } from './actions'

store.dispatch(getBlocks(state));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
