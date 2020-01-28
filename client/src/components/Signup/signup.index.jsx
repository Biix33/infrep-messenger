import React from "react";
import API from "../../services/API";
import { FormErrors } from "../Form/form.errors";

export default class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
    formErrors: {
      username: "",
      email: "",
      password: ""
    },
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState(
      {
        [id]: value
      },
      () => {
        this.validateField(id, value);
      }
    );
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.length >= 2;
        fieldValidationErrors.username = usernameValid ? "" : " is invalid";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const { emailValid, usernameValid, passwordValid } = this.state;
    this.setState({
      formValid: usernameValid && emailValid && passwordValid
    });
  };

  handleSubmit = async () => {
    const { username, email, password, passwordCheck } = this.state;
    if (
      !username ||
      username.length === 0 ||
      !email ||
      email.length === 0 ||
      !password ||
      password !== passwordCheck
    )
      return;
    try {
      const { data } = await API.signup({ username, email, password });
      this.props.onUserConnect(data);
      window.location = "/chat";
    } catch (e) {
      return console.error(e);
    }
  };

  componentDidMount() {
    this.setState({ formValid: true });
  }

  render() {
    const { pseudo, email, password, passwordCheck, formValid } = this.state;
    return (
      <div className="form-wrapper">
        <h4>Créer un compte</h4>
        {!formValid && <FormErrors formErrors={this.state.formErrors} />}
        <div className="form-row">
          <label htmlFor="username">Pseudo</label>
          <input
            type="text"
            name="username"
            id="username"
            value={pseudo}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            required
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
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="password-check">Confirmation mot de passe</label>
          <input
            type="password"
            name="password-check"
            id="passwordCheck"
            value={passwordCheck}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="avatar">Avatar</label>
          <input type="file" name="avatar" id="avatar" />
        </div>
        <div className="form-row">
          <button
            className="btn self-center"
            type="submit"
            disabled={formValid}
            onClick={this.handleSubmit}
          >
            S'inscrire
          </button>
        </div>
      </div>
    );
  }
}
