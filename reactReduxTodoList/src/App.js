/**
* Update Type:
* ============
*  connect mapDispatchToProps
*/


/* styles */
import logo from './logo.svg';
import './App.css';

/* libs */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
// wires props data and dispatch functions
// to reducer
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateCurrent
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);






//export default App;
