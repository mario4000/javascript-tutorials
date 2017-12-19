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
import {updateCurrent} from './reducers/todo';


const todoChangeHandler = (val) =>
  store.dispatch(updateCurrent(val));


/* mount */
const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App todos={state.todos}
         currentTodo={state.currentTodo}
         changeCurrent={todoChangeHandler}/>,
    document.getElementById('root')
  );
}

render();







store.subscribe(render);







registerServiceWorker();
