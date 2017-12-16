/* styles */
import './index.css';

/* libs */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/* components */
import App from './App';


/* configure */

//redux
import store from './store';
const state = store.getState();


/* mount */
ReactDOM.render(
  <App {...state}/>,
  document.getElementById('root')
);








registerServiceWorker();
