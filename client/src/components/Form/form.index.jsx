import React from "react";
import "./form.styles.css";

export default class Form extends React.Component {
  state = {
    message: ""
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSend(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form action="" method="" onSubmit={this.handleSubmit}>
        <textarea
          className="input-message"
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
          Envoyer
        </button>
      </form>
    );
  }
}
