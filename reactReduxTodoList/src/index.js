import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const initialState = {
  todos: [
    {id: 1, name: "Create Static UI", isComplete: true},
    {id: 2, name: "Create Initial State", isComplete: true},
    {id: 3, name: "Use State to Render UI", isComplete: true}
  ],
  currentTodo: "temp"
}

ReactDOM.render(
  <App todos={ initialState.todos }/>,
  document.getElementById('root')
);








registerServiceWorker();
