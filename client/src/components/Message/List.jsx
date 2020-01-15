import React from "react";
import Message from ".";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.scrollBottom();
  }

  componentDidUpdate() {
    this.scrollBottom();
  }

  scrollBottom = () => {
    // Forcer le scroll en bas de la liste
    const $lastLi = this.listRef.current;
    $lastLi.scrollIntoView({ behavior: "smooth" });
  };

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
        {/* @HACK: dummy li to force scroll bottom */}
        <li ref={this.listRef}></li>
      </ul>
    );
  }
}
export default List;
