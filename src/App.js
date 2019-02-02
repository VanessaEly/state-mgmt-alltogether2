import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/



class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
    users: [{ username: 'Amy' }, { username: 'John' }],
  }
  handleMessage = (username, text) => {
    this.setState((prevState) => ({
    	messages: [...prevState.messages, { username, text }],
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    	{this.state.users.map(currentUser => (
    		<ChatWindow key={currentUser.username} user={currentUser}
				messages={this.state.messages} onMessage={this.handleMessage}/>
    	))}
        </div>
      </div>
    );
  }
}

export default App;
