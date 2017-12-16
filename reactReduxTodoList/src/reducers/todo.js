import {
  CURRENT_UPDATE,
  TODO_ADD
} from "./constants"

const initialState = {
  todos: [
    {id: 1, name: "Create Static UI", isComplete: true},
    {id: 2, name: "Create Initial State", isComplete: true},
    {id: 3, name: "Use State to Render UI", isComplete: true}
  ],
  currentTodo: "temp"
}

//redux state
export default (state = initialState, action) => {

  switch(action.type){
    case TODO_ADD:
    console.log('adding....', action);
      return {...state,
              todos: state.todos.concat(action.payload)
             }

    default:
      return state
  }

}
