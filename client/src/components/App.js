import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
          <Route
            exact
            path="/"
            render={() => {
              if (API.isAuthenticated()) {
                return <Redirect to="/chat" />;
              }
              return <Home />;
            }}
          />
          <Route
            exact
            path="/logout"
            render={() => {
              localStorage.clear();
              return <Redirect to="/" />;
            }}
          />
          <Route
            path="/chat"
            render={() => {
              if (!API.isAuthenticated()) {
                return <Redirect to="/" />;
              }
              return <Chat />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
