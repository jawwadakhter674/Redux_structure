import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/Reducer/index'

const store=createStore(
  rootReducer
)

console.log(store)
ReactDOM.render(
  <Provider store={store}>

<App />
  </Provider>


   
 ,
  document.getElementById('root')
);

