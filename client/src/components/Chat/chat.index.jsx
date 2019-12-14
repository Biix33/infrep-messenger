import React from "react";
import "./chat.design.css";

import List from "../List";
import Navbar from "../Navbar/navbar.index";
import Form from "../Form/form.index";

import Messenger from "../../services/Messenger";

export default class Chat extends React.Component {
  state = {
    messages: [],
    usersCount: 0
  };

  componentDidMount() {
    // connect to socket server
    this.messenger = new Messenger(this.addMessage, this.updateUsers);
    this.messenger.join(this.props.currentUser);
  }

  addMessage = newMessage => {
    const newList = [...this.state.messages, newMessage];
    this.setState({ messages: newList });
  };

  updateUsers = data => {
    const { user, count } = data;

    this.setState({ usersCount: count });
  };

  handleSubmit = content => {
    const newMessage = {
      content: content,
      author: this.props.currentUser
    };
    
    // Envoi message au serveur
    this.messenger.send(newMessage);
    this.addMessage(newMessage);
  };

  render() {
    return (
      <div id="chat-container">
        <Navbar currentUser={this.props.currentUser} />
        <div>
          Il y a <strong>{this.state.usersCount}</strong> utilisateurs connectés
        </div>

        <div className="scroller">
          <List
            currentUser={this.props.currentUser}
            messages={this.state.messages}
          />
        </div>
        <section id="form-message">
          <Form onSend={this.handleSubmit} />
        </section>
      </div>
    );
  }
}