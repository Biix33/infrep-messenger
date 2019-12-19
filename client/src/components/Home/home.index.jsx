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
  }

  isLoggingIn() {
    this.setState({ isLoggingIn: true, isSigningUp: false });
  }

  isSigningUp() {
    this.setState({ isSigningUp: true, isLoggingIn: false });
  }

  render() {
    const { isLoggingIn, isSigningUp } = this.state;
    return (
      <div className="content">
        <Navbar
          handleLoggingIn={this.isLoggingIn}
          handleSignUp={this.isSigningUp}
        />
        <div className="main">
          {isLoggingIn && <Signin onUserConnect={this.props.onUserConnect} />}
          {isSigningUp && <Signup onUserConnect={this.props.onUserConnect} />}
        </div>
      </div>
    );
  }
}
