import React from "react";
import Message from "./Message";

class List extends React.Component {
  state = {
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

  render() {
    return (
      <ul id="main-messages">
        {this.state.messages.map((message, i) => {
          return (
            <li key={i}>
              <Message
                author={message.author}
                self={message.author === this.props.currentUser}
              >
                {message.content}
              </Message>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
