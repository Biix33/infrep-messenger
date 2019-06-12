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
    this.state.message = "";
  };

  render() {
    return (
      <form action="" method="" onSubmit={this.handleSubmit}>
        <textarea
          className="input-message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button type="submit" name="send">
          Envoyer
        </button>
      </form>
    );
  }
}
