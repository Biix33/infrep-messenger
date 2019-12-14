import React from "react";
import Avatar from "../Avatar/avatar.index";

export default class User extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="user">
        <Avatar currentUser={currentUser} />
        <div className="username">
          <span>{currentUser}</span>
        </div>
      </div>
    );
  }
}
