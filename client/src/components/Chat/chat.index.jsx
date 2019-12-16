import React from "react";
import "./chat.design.css";

import List from "../List";
import Navbar from "../Navbar/navbar.index";
import Form from "../Form/form.index";

import Messenger from "../../services/Messenger";

export default class Chat extends React.Component {
  state = {
    messages: [],
    usersCount: 0,
    currentUser: localStorage.getItem("user")
  };

  componentDidMount() {
    // connect to socket server
    this.messenger = new Messenger(this.addMessage, this.updateUsers);
    this.messenger.join(this.state.currentUser);
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
      author: this.state.currentUser
    };

    // Envoi message au serveur
    this.messenger.send(newMessage);
    this.addMessage(newMessage);
  };

  render() {
    const { currentUser, usersCount, messages } = this.state;
    return (
      <div id="chat-container">
        <Navbar currentUser={currentUser} usersCount={usersCount} />
        <div className="scroller">
          <List currentUser={currentUser} messages={messages} />
        </div>
        <section id="form-message">
          <Form onSend={this.handleSubmit} />
        </section>
      </div>
    );
  }
}
