import React from "react";
import "./navbar.styles.css";
import UsersInfo from "../UsersInfo/UsersInfo";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick(event) {
    event.preventDefault();
    this.props.handleLoggingIn();
  }

  handleSignupClick(event) {
    event.preventDefault();
    this.props.handleSignUp();
  }

  render() {
    const { currentUser, usersCount } = this.props;
    const navLinks = (
      <div className="nav-items">
        <a href="/signup" className="nav-link" onClick={this.handleSignupClick}>
          Créer un compte
        </a>
        <a href="/login" className="nav-link" onClick={this.handleLoginClick}>
          Se connecter
        </a>
      </div>
    );

    return (
      <nav className="nav-bar">
        <a href="/" className="nav-brand">
          Welcome Messenger
        </a>
        <div className="right">
          {currentUser ? (
            <UsersInfo user={currentUser} usersCount={usersCount} />
          ) : (
            navLinks
          )}
        </div>
      </nav>
    );
  }
}
