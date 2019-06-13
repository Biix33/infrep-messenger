import React from "react";
import logo from "../logo.svg";
import List from "./List";
import Navbar from "./Navbar/navbar.index";
import Form from "./Form/form.index";
import Messenger from "../services/Messenger";

class App extends React.Component {
  state = {
    currentUser: undefined,
    messages: []
  };

  componentWillMount() {
    let username;
    while (!username) {
      username = prompt("What's your name bro ?");
    }
    this.setState({ currentUser: username });
  }

  componentDidMount() {
    // connect to socket server
    this.messenger = new Messenger(this.addMessage);
  }

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

export default App;
