import React from "react";
import "./usersInfo.styles.css";
import Avatar from "../Avatar/avatar.index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default class UsersInfo extends React.Component {
  render() {
    const { user, usersCount } = this.props;
    return (
      <div className="users-infos">
        <span>
          <FontAwesomeIcon icon={faUsers} /> {usersCount}
        </span>
        <div className="current-user">
          <Avatar user={user.username} />
          <div>{user.username}</div>
        </div>
      </div>
    );
  }
}
