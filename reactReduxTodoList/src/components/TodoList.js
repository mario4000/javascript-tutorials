/* libs */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/* action creators */
import {fetchTodos, toggleTodo,
        destroyTodo, getVisibleTodos} from './../reducers/todo';

/* components */
const TodoItem = ({id, isComplete, name, toggleTodo, destroyTodo}) => (
  <li id={`todo-item-${id}`}>
    <input type="checkbox"
           checked={isComplete}
           onChange={()=> toggleTodo(id)}/>
    {name}
    <span className="delete-item">
      <button onClick={() => destroyTodo(id)}>
        x
      </button>
    </span>
  </li>
)

class TodoList extends Component {

  /* lifecycle */
  componentDidMount(){
    this.props
      .fetchTodos();
  }

  render(){
    const {todos, toggleTodo, destroyTodo} = this.props;
    console.log("rendering todo list....");
    return(
      <div className="Todo-List">
          <ul>
            { todos.map( todo => (
              <TodoItem
                  {...todo}
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  destroyTodo={destroyTodo}/>
            ))}
          </ul>
      </div>
    )

  }
}

export default connect(
  /* mapStateToProps: return filtered todos  */
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
  /* mapDispatchToProps */
  {fetchTodos, toggleTodo, destroyTodo}
)(TodoList);
