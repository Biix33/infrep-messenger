import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./Signin/signin.index";
import Chat from "./Chat/chat.index";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </div>
    );
  }
}

export default App;
