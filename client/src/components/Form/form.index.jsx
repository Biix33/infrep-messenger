import React from "react";
import "./form.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.textInput = React.createRef();
  }

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSend(this.state.message);
    this.setState({ message: "" });
    this.textInput.current.focus();
  };

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="bg-purple-gradient">
        <textarea
          className="input-message"
          ref={this.textInput}
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Ecrivez ici..."
        />
        <button
          className="btn"
          id="send-btn"
          type="submit"
          disabled={!this.state.message.trim() ? true : false}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    );
  }
}
