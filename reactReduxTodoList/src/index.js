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



const todoChangeHandler = (val) => store.dispatch({
                            type:"CURRENT_UPDATE",
                            payload: val
                          });
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
