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


/* mount */
const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App {...state}/>,
    document.getElementById('root')
  );
}

render();


store.subscribe(render);


setTimeout(() => {
  store.dispatch({
    type: "TODO_ADD",
    payload: {id: 4, name: "Dispatching new item with redux", isComplete: true}
  });
}, 3000);







registerServiceWorker();
