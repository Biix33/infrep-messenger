import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./Signin/signin.index";
import Signup from "./Signup/signup.index";
import Chat from "./Chat/chat.index";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/chat" component={Chat} />
        </Switch>
      </div>
    );
  }
}

export default App;
