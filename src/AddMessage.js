import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AddMessage extends Component {
  	state = {
    	message: '',
    };
	isDisabled = () => {
      return false;
    };
	handleInputChange = event => {
      const input = event.target.value;
      this.setState(() => ({ message: input }));
    };
	handleSubmit = event => {
    	event.preventDefault(); // avoid button's default form submit (refresh page)
      	this.props.onMessage(this.state.message);
      	this.setState(() => ({ message: '' }));
    };
	render() {
    	return (
        	<div>
              <form onSubmit={this.handleSubmit} className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.message}
                  placeholder="Enter your message..."
                  onChange={this.handleInputChange}
                />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        );
    };
};

AddMessage.proptypes = {
  onMessage: PropTypes.func.isRequired,
};

export default AddMessage;