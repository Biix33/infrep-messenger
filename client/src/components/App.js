import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Chat from "./Chat/chat.index";
import API from "../services/API";
import Home from "./Home/home.index";

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem("user")
  };

  onUserConnect = data => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (API.isAuthenticated()) {
                return <Redirect to="/chat" />;
              }
              return <Home onUserConnect={this.onUserConnect} />;
            }}
          />
          <Route
            exact
            path="/logout"
            render={() => {
              API.logout();
              return <Redirect to="/" />;
            }}
          />
          <Route
            path="/chat"
            render={() => {
              if (!API.isAuthenticated()) {
                return <Redirect to="/" />;
              }
              return <Chat currentUser={JSON.parse(currentUser)} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
