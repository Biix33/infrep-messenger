import React from "react";
import logo from "../logo.svg";
import List from "./List";
import Navbar from "./Navbar/navbar.index";
import Form from "./Form/form.index";

class App extends React.Component {
  state = {
    currentUser: "Boby",
    messages: [
      {
        author: "Boby",
        content: "Hallo le monde"
      },
      {
        author: "Franck",
        content: "Houla gil tu montes à pied en ce moment"
      },
      {
        author: "Lola",
        content: "Papa j'ai faim !"
      },
      {
        author: "Monica",
        content: "Mais qu'est-ce qui se passe"
      },
      {
        author: "Boby",
        content: "Time to sleep children"
      },
      {
        author: "Boby",
        content: "Parlons vite, parlons bien !"
      }
    ]
  };

  addMessage = content => {
    const newMessage = {
      content: content,
      author: this.state.currentUser
    };

    const newList = [...this.state.messages, newMessage];

    this.setState({ messages: newList });
  };

  render() {
    return (
      <div className="container">
        <Navbar currentUser={this.state.currentUser} />
        <List
          currentUser={this.state.currentUser}
          messages={this.state.messages}
        />
        <section id="form-message">
          <Form onSend={this.addMessage} />
        </section>
      </div>
    );
  }
}

export default App;
