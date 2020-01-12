import React from "react";
import "./usersInfo.styles.css";
import Avatar from "../Avatar/avatar.index";

export default class UsersInfo extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="current-user">
        <Avatar user={user.username} />
        <div>{user.username}</div>
      </div>
    );
  }
}
