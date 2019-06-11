import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="avatar">
          <img src="https://i.pravatar.cc/64" />
        </div>
        <div className="username">
          <span>Gilbert monte à pieds</span>
        </div>
      </header>
      <section id="main-messages">
        <div className="contact">
          <span className="avatar">
            <img src="https://i.pravatar.cc/24" />
          </span>
          <span className="message">petit message</span>
        </div>
        <div className="me">
          <span className="message">message un peu plus long avec emoji</span>
        </div>
      </section>
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

export default App;
