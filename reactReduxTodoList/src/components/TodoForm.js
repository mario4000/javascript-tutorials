/* libs */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/* action creators */
import {updateCurrent, saveTodo} from './../reducers/todo';

/* components */
class TodoForm extends Component {

  handleInputChange = (evt) => {
    const { updateCurrent } = this.props;
    const val = evt.target.value;
    updateCurrent(val);
  };

  handleSubmit = (evt) => {
    const { currentTodo, saveTodo } = this.props;
    evt.preventDefault();

    if(currentTodo){
      saveTodo(currentTodo);
    }
  }

  render(){
    const {currentTodo } = this.props;
    console.log("rendering todo form....");
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               onChange={this.handleInputChange}
               value={currentTodo}/>
        <input type="submit" />
      </form>
    )
  }

}

export default connect(
  /* mapStateToProps: return currentTodo  */
  (state) => ({currentTodo: state.currentTodo}),
  /* mapDispatchToProps */
  {updateCurrent, saveTodo}
)(TodoForm);
