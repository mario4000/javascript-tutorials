/**
* Update Type:
* ============
* create new components
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
    const {todos} = this.props;
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
            <TodoList todos={todos} />
        </div>

      </div>
    );
  }
}

export default App;
