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
    newUserConnected: false
  };

  componentDidMount() {
    // connect to socket server
    this.messenger = new Messenger(this.addMessage, this.updateUsers);
    this.messenger.join(this.props.currentUser);
  }

  componentDidUpdate() {
    setTimeout(() => this.setState({ newUserConnected: false }), 10000);
  }

  addMessage = newMessage => {
    const newList = [...this.state.messages, newMessage];
    this.setState({ messages: newList });
  };

  updateUsers = data => {
    const { user, count } = data;

    this.setState({
      usersCount: count,
      newUserConnected: user
    });
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
    const { usersCount, messages, newUserConnected } = this.state;
    const { currentUser } = this.props;
    return (
      <div id="chat-container">
        <Navbar currentUser={currentUser} usersCount={usersCount} />
        {newUserConnected && (
          <div>{newUserConnected.username} vient de se connecter</div>
        )}
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
