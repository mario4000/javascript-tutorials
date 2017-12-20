/**
* Update Type:
* ============
* using connect for efficient
* state management in components
*/


/* styles */
import logo from './logo.svg';
import './App.css';

/* libs */
import React, { Component } from 'react';

/* components */
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/* class */
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}
               className="App-logo"
               alt="logo" />
          <h1 className="App-title">
            Welcome to React and Redux
          </h1>
        </header>

        <div className="Todo-App">
            <TodoForm />
            <TodoList />
        </div>

      </div>
    );
  }
}

export default App;
