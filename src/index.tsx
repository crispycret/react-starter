import React from 'react';
import ReactDOM from 'react-dom';

import './assets/bootstrap/5.1.3/css/bootstrap.min.css'

import './assets/css/index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import App from './App';

library.add(fab, faCheckSquare, faCoffee)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  