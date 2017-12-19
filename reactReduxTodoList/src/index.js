/* styles */
import './index.css';

/* libs */
import React from 'react';
import ReactDOM from 'react-dom';
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
const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App todos={state.todos}
         currentTodo={state.currentTodo}
         changeCurrent={actions.updateCurrent}/>,
    document.getElementById('root')
  );
}

render();







store.subscribe(render);







registerServiceWorker();
