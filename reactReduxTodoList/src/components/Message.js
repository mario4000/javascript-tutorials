import React from 'react';
import {connect} from 'react-redux';

const Message = ({message}) => (
  message
    ? <span className="message">{message}</span>
    : null
);


export default connect(
  /* mapStateToProps: return message  */
  (state) => ({message: state.message})
  /* mapDispatchToProps */
)(Message);
