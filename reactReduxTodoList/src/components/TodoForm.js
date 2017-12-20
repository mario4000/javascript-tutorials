/* libs */
import React from 'react';
import {connect} from 'react-redux';

/* action creators */
import {updateCurrent} from './../reducers/todo';

/* components */
const TodoForm = (props) => {
  const {currentTodo, updateCurrent} = props;
  const handleInputChange = (evt) => {
      const val = evt.target.value;
      updateCurrent(val);
  };

  console.log("rendering todo form....");
  return (
    <form>
      <input type="text"
             onChange={handleInputChange}
             value={currentTodo}/>
    </form>
  )
}

export default connect(
  /* mapStateToProps: return currentTodo  */
  (state) => ({currentTodo: state.currentTodo}),
  /* mapDispatchToProps */
  {updateCurrent}
)(TodoForm);
