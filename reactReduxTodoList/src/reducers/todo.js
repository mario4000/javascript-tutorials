import {
  CURRENT_UPDATE,
  TODO_ADD,
  TODO_LOAD,
  TODO_REPLACE,
  TODO_DELETE
} from "./constants";


/* data */
import { getTodos, createTodo,
         updateTodo, deleteTodo } from './../lib/todoServices';
import { showMessage } from './messages';
const initialState = {
  todos: [],
  currentTodo: ""
}

/* action creator : sync */
export const loadTodos = (todos) => ({type:TODO_LOAD, payload: todos});
export const addTodo = (todo) => ({type:TODO_ADD, payload: todo});
export const replaceTodo = (todo) => ({type:TODO_REPLACE, payload: todo});
export const removeTodo = (id) => ({type:TODO_DELETE, payload: id});
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val});


/* action creator: async [ return a thunk function] */
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading todos...'));
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
      });
  }
}

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Saving todo update.'));
    // get updated todo from state and update
    // data
    const {todos} = getState().todo;
    const updatedTodo = todos.find(t => t.id === id);
    const toggled = {...updatedTodo,
                      isComplete: !updatedTodo.isComplete
                    };
    updateTodo(toggled)
      .then(res => {
        dispatch(replaceTodo(res));
      });
  }
}

export const destroyTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Removing todo'));
    deleteTodo(id)
      .then(res => {
        dispatch(removeTodo(id));
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

    case TODO_REPLACE:
      return {...state,
              todos: state.todos.map(t =>
                t.id === action.payload.id
                ? action.payload
                : t)
             };

    case TODO_DELETE:
      return {...state,
              todos: state.todos.filter(t =>
                  t.id !== action.payload)
             };

    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};

    default:
      return state
  }
}


/* filters */

export const getVisibleTodos = (todos, filter) => {
  switch(filter){

    case "active":
      return todos.filter(t => !t.isComplete);

    case "completed":
      return todos.filter(t => t.isComplete);

    default:
      return todos;
  }
}
