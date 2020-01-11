import React from "react";
import "./navbar.styles.css";
import NavItems from "./nav_items";

export default class Navbar extends React.Component {
  render() {
    const { navLinks } = this.props;

    return (
      <nav className="nav-bar">
        <a href="/" className="nav-brand">
          Welcome Messenger
        </a>
        <div className="right">{<NavItems items={navLinks} />}</div>
      </nav>
    );
  }
}
