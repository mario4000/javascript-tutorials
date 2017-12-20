/* libs */
import React from 'react';
import {connect} from 'react-redux';

/* components */
const TodoItem = ({id, isComplete, name}) => (
  <li id={`todo-item-${id}`}>
    <input type="checkbox"
           defaultChecked={isComplete}/>
    {name}
  </li>
)

const TodoList =  (props) => {
  const {todos} = props;
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
};

export default connect(
  /* mapStateToProps: return todos  */
  (state) => ({todos: state.todos})
  /* mapDispatchToProps */
)(TodoList);
