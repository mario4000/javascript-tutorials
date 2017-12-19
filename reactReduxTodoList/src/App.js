/**
* Update Type:
* ============
*  mapDispatchToProps shorthand refactor
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

/* action creators */
import {updateCurrent} from './reducers/todo';


/* class */
class App extends Component {

  render() {
    const {todos, currentTodo, updateCurrent} = this.props;
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
                      changeCurrent={updateCurrent}/>
            <TodoList todos={todos} />
        </div>

      </div>
    );
  }
}

// connected component;
// connect function shorthand
export default connect(
  /* mapStateToProps */
  (state) => state,
  /* mapDispatchToProps */
  {updateCurrent}
)(App);






//export default App;
