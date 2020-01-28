import React from "react";
import "./usersInfo.styles.css";
import { Avatar } from "../Avatar/avatar.index";

/**
 * Render user infos component
 */
export const UserInfos = ({ user, classNames }) => {
  if (!classNames) {
    classNames = ['current-user', ' flex-column'];
  }
  return (
    <div className={classNames.map((className) => className)}>
      <Avatar user={user.username} />
      <div>{user.username}</div>
    </div>
  );
};
