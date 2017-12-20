/* styles */
import './index.css';

/* libs */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

/* components */
import App from './App';

/* configure */
import store from './store';

/* mount */
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );











registerServiceWorker();
