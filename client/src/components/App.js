import React from "react";
import logo from "../logo.svg";
import List from "./List";
import Navbar from "./Navbar/navbar.index";

class App extends React.Component {
  state = {
    currentUser: "Boby"
  };

  render() {
    return (
      <div className="container">
        <Navbar currentUser={this.state.currentUser} />
        <List currentUser={this.state.currentUser} />
        <section id="form-message">
          <form action="" method="">
            <textarea className="input-message" />
            <button type="submit" name="send">
              Envoyer
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
