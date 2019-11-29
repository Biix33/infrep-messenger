import React from "react";
import "./chat.design.css";
import List from "../List";
import Navbar from "../Navbar/navbar.index";
import Form from "../Form/form.index";
import Messenger from "../../services/Messenger";

export default class Chat extends React.Component {
  state = {
    currentUser: undefined,
    messages: [],
    usersCount: 0
  };

  componentWillMount() {
    const username = localStorage.getItem("user");
    // while (!username) {
    //   username = prompt("What's your name bro ?");
    // }
    this.addUser(username);
  }

  componentDidMount() {
    // connect to socket server
    this.messenger.receive(this.addMessage);
  }

  addUser = newUser => {
    this.messenger = new Messenger(newUser);
    this.setState({ currentUser: newUser });
  };

  addMessage = newMessage => {
    const newList = [...this.state.messages, newMessage];
    this.setState({ messages: newList });
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
    if (!this.state.currentUser) return <div>Infrep Messenger !</div>;
    return (
      <div className="container">
        <Navbar currentUser={this.state.currentUser} />
        <div className="scroller">
          <List
            currentUser={this.state.currentUser}
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