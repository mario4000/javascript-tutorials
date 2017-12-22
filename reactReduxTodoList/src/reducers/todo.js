import {
  CURRENT_UPDATE,
  TODO_ADD,
  TODO_LOAD
} from "./constants"


/* data */
import {getTodos} from './../lib/todoServices';
const initialState = {
  todos: [],
  currentTodo: ""
}

/* action creator : sync */
export const loadTodos = (todos) => ({type:TODO_LOAD, payload: todos});
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val});


// async [ return a thunk function]
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then(todos => dispatch(loadTodos(todos)));
  }
}



/* redux state */
export default (state = initialState, action) => {

  switch(action.type){

    case TODO_LOAD:
      return {...state,
              todos: action.payload
            };

    case TODO_ADD:
      return {...state,
              todos: state.todos.concat(action.payload)
            };

    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};

    default:
      return state
  }

}
