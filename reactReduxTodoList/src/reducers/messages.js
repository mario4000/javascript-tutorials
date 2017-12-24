import {
  MESSAGE_SHOW,
  TODO_ADD,
  TODO_LOAD
} from "./constants";

/* action creators */
export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg});

export default function(state="", action){
  switch(action.type){
    case MESSAGE_SHOW:
      return action.payload;
    case TODO_ADD:
    case TODO_LOAD:
        return '';
    default:
      return state;
  }
}
