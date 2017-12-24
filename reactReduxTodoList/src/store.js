import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todo';
import messageReducer from './reducers/messages';

const reducer = combineReducers({
  // namespace : target reducer
  // state.todo
  todo: todoReducer,
  // state.message
  message: messageReducer
});


export default createStore(
  reducer,
  //apply thunk to store
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
