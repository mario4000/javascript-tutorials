/* styles */
import './index.css';

/* libs */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import registerServiceWorker from './registerServiceWorker';

/* components */
import App from './App';


/* configure */
//redux
import store from './store';
import {updateCurrent} from './reducers/todo';

const actions = bindActionCreators({
    // app action : action creator
    updateCurrent
}, store.dispatch);

/* mount */
  ReactDOM.render(
    <Provider store={store}>
      <App changeCurrent={actions.updateCurrent}/>
    </Provider>,
    document.getElementById('root')
  );






registerServiceWorker();
