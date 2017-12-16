import React from 'react';


const TodoItem = ({id, isComplete, name}) => (
  <li id={`todo-item-${id}`}>
    <input type="checkbox"
           defaultChecked={isComplete}/>
    {name}
  </li>
)

export default (props) => {
  const {todos} = props;
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
