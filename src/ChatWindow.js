import React, { Component} from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.js'; 
import AddMessage from './AddMessage.js';

class ChatWindow extends Component {
  	onMessage = message => {
    	this.props.onMessage(this.props.user.username, message);
    };
	render() {
    	return (
        	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>
      		<MessageList messages={this.props.messages} user={this.props.user}/>
            <AddMessage onMessage={this.onMessage}/>
          </div>
        );
    };
};

ChatWindow.proptypes = {
	user: PropTypes.object.isRequired,
  	messages: PropTypes.array.isRequired,
  	onMessage: PropTypes.func.isRequired,
};
export default ChatWindow;