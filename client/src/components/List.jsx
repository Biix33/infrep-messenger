import React from "react";
import Message from "./Message";

class List extends React.Component {
  render() {
    let author;
    let me;
    return (
      <ul id="main-messages">
        {this.props.messages.map((message, i) => {
          if (message.author === author) {
            me = true;
          }
          author = message.author;

          return (
            <li key={i}>
              <Message
                author={message.author[0]}
                self={message.author === this.props.currentUser}
                me={me}
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
