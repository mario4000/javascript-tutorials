/* libs */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/* action creators */
import {fetchTodos} from './../reducers/todo';

/* components */
const TodoItem = ({id, isComplete, name}) => (
  <li id={`todo-item-${id}`}>
    <input type="checkbox"
           defaultChecked={isComplete}/>
    {name}
  </li>
)

class TodoList extends Component {

  /* lifecycle */
  componentDidMount(){
    this.props
      .fetchTodos();
  }

  render(){
    const {todos} = this.props;
    console.log("rendering todo list....");
    return(
      <div className="Todo-List">
          <ul>
            { todos.map( todo => (
              <TodoItem {...todo} key={todo.id}/>
            ))}
          </ul>
      </div>
    )

  }
}

export default connect(
  /* mapStateToProps: return todos  */
  (state) => ({todos: state.todos}),
  /* mapDispatchToProps */
  {fetchTodos}
)(TodoList);
