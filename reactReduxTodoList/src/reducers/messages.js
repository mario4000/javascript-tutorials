import {
  MESSAGE_SHOW,
  TODO_LOAD,
  TODO_ADD,
  TODO_REPLACE,
  TODO_DELETE
} from "./constants";

/* action creators */
export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg});

export default function(state="", action){
  switch(action.type){

    case MESSAGE_SHOW:
      return action.payload;

    case TODO_LOAD:
    case TODO_ADD:
    case TODO_REPLACE:
    case TODO_DELETE:
        return '';

    default:
      return state;
  }
}
