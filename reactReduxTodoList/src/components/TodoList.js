/* libs */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/* action creators */
import {fetchTodos, toggleTodo} from './../reducers/todo';

/* components */
const TodoItem = ({id, isComplete, name, toggleTodo}) => (
  <li id={`todo-item-${id}`}>
    <input type="checkbox"
           checked={isComplete}
           onChange={()=> toggleTodo(id)}/>
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
    const {todos, toggleTodo} = this.props;
    console.log("rendering todo list....");
    return(
      <div className="Todo-List">
          <ul>
            { todos.map( todo => (
              <TodoItem
                  {...todo}
                  key={todo.id}
                  toggleTodo={toggleTodo}/>
            ))}
          </ul>
      </div>
    )

  }
}

export default connect(
  /* mapStateToProps: return todos  */
  (state) => ({todos: state.todo.todos}),
  /* mapDispatchToProps */
  {fetchTodos, toggleTodo}
)(TodoList);
