import React from 'react';
class Message extends React.Component {
    render() {
      return (
        <h3> 
            <span className="badge amber darken-2">{this.props.Messages}</span>
        </h3>
      );
    }
}

export default Message;
