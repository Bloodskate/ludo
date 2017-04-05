import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import Ludo from './components/ludo';

import './style.css';


ReactDom.render(
  <Provider>
    <Ludo />
  </Provider>, document.getElementById('root')
);