import React from "react";
import API from "../../services/API";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || email.length === 0 || !password || password.length === 0)
      return;
    try {
      const { data } = await API.signin(email, password);
      this.props.onUserConnect(data);
    } catch (e) {
      return console.error(e);
    }
    return (window.location = "/");
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="form-wrapper">
        <form action="" method="POST" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <button
              className="btn self-center"
              type="submit"
              disabled={!email.trim() || !password.trim() ? true : false}
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    );
  }
}
