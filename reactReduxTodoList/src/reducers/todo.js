import {
  CURRENT_UPDATE,
  TODO_ADD,
  TODO_LOAD
} from "./constants";


/* data */
import { getTodos, createTodo } from './../lib/todoServices';
import { showMessage } from './messages';
const initialState = {
  todos: [],
  currentTodo: ""
}

/* action creator : sync */
export const loadTodos = (todos) => ({type:TODO_LOAD, payload: todos});
export const addTodo = (todo) => ({type:TODO_ADD, payload: todo});
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val});


/* action creator: async [ return a thunk function] */
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then(todos => dispatch(loadTodos(todos)));
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving todo.'));
    createTodo(name)
      .then(res => {
        dispatch(addTodo(res));
        dispatch(showMessage(''));
      });
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
              currentTodo: '',
              todos: state.todos.concat(action.payload)
            };

    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};

    default:
      return state
  }

}
