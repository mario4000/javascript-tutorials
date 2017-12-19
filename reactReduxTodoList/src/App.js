/**
* Update Type:
* ============
*  manage state with react-redux
*  connect.
*/


/* styles */
import logo from './logo.svg';
import './App.css';

/* libs */
import React, { Component } from 'react';
import {connect} from 'react-redux';

/* components */
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/* class */
class App extends Component {

  render() {
    const {todos, currentTodo, changeCurrent} = this.props;
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
            <TodoForm currentTodo={currentTodo}
                      changeCurrent={changeCurrent}/>
            <TodoList todos={todos} />
        </div>

      </div>
    );
  }
}

// connected component;
// wires props to redux store
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);






//export default App;
