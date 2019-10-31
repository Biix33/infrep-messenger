import React from "react";
import "./signin.style.css";

export default class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || email.length === 0 || !password || password.length === 0)
      return;
    localStorage.setItem("user", email);
    return (window.location = "/chat");
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-signin">
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
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
  }
}
