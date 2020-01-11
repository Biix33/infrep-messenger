import React from "react";
import Navbar from "../Navbar/navbar.index";
import Signin from "../Signin/signin.index";
import Signup from "../Signup/signup.index";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggingIn = this.isLoggingIn.bind(this);
    this.isSigningUp = this.isSigningUp.bind(this);
    this.state = {
      isLoggingIn: false,
      isSigningUp: false
    };

    this.navLinks = [
      {
        name: "Créer un compte",
        link: "/signup",
        onClick: this.isSigningUp
      },
      {
        name: "Se connecter",
        link: "/login",
        onClick: this.isLoggingIn
      }
    ];
  }

  isLoggingIn(event) {
    event.preventDefault();
    this.setState({ isLoggingIn: true, isSigningUp: false });
  }

  isSigningUp(event) {
    event.preventDefault();
    this.setState({ isSigningUp: true, isLoggingIn: false });
  }

  render() {
    const { isLoggingIn, isSigningUp } = this.state;
    return (
      <div className="content">
        <Navbar navLinks={this.navLinks} />
        <div className="main">
          {isLoggingIn && <Signin onUserConnect={this.props.onUserConnect} />}
          {isSigningUp && <Signup onUserConnect={this.props.onUserConnect} />}
        </div>
      </div>
    );
  }
}
