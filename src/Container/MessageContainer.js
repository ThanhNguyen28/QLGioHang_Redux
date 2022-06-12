import React from 'react';
import {connect} from 'react-redux';
import Message from '../Components/Message'
import PropTypes from 'prop-types'
import {actChangeMessage} from '../Actions/index'
class MessageContainer extends React.Component {
    render() {
      var {message}=this.props;
      return (
          <Message Messages={message}/>
      );
    }
}
MessageContainer.propTypes={
  message:PropTypes.string.isRequired
}

const mapStatetoProps=(state)=>{
    return {
      message:state.message
    }
 };
 const mapDisaptchtoProps=(dispatch,props)=>{
  return {
       onChangeMessage:(message)=>{
         dispatch(actChangeMessage(message));
       } 
   }  
};
export default connect(mapStatetoProps,mapDisaptchtoProps)(MessageContainer);
