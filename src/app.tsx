import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Routes } from './routes';

import './themes/default.scss';
import './themes/tailwind.css';
import './themes/reset.css';
import './themes/font.scss';

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('app')
);

// reportWebVitals();

