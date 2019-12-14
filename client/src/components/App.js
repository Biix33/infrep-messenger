import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signin from "./Signin/signin.index";
import Signup from "./Signup/signup.index";
import Chat from "./Chat/chat.index";
import API from "../services/API";
import Home from "./Home/home.index";

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem("user")
  };

  onUserConnect = username => {
    this.setState({ currentUser: username });
  };

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => {
              if (API.isAuthenticated()) {
                return <Redirect to="/" />;
              }
              return <Signin onSubmit={this.onUserConnect} />;
            }}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Signup} />
          <Route
            path="/chat"
            render={() => {
              if (!API.isAuthenticated()) {
                return <Redirect to="/login" />;
              }
              return (
                <Chat
                  messenger={this.messenger}
                  currentUser={this.state.currentUser}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
