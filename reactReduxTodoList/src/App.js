/**
* Update Type:
* ============
* remove todo todo item
*
*/


/* styles */
import logo from './logo.svg';
import './App.css';

/* libs */
import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

/* components */
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';

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

        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <TodoList />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
