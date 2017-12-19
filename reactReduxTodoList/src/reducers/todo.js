import {
  CURRENT_UPDATE,
  TODO_ADD
} from "./constants"


/* data */
const initialState = {
  todos: [
    {id: 1, name: "Create Static UI", isComplete: true},
    {id: 2, name: "Create Initial State", isComplete: true},
    {id: 3, name: "Use State to Render UI", isComplete: true}
  ],
  currentTodo: ""
}

/* action creator */
export const updateCurrent = (val) => ({
                                type:CURRENT_UPDATE,
                                payload: val
                              });

/* redux state */
export default (state = initialState, action) => {

  switch(action.type){

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
