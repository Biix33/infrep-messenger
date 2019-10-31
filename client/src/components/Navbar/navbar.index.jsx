import React from "react";
import Avatar from "../Avatar/avatar.index";
import "./navbar.styles.css";

function Navbar(props) {
  const { currentUser } = props;
  return (
    <nav className="header">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="username">
        <span>{currentUser}</span>
      </div>
    </nav>
  );
}

export default Navbar;
