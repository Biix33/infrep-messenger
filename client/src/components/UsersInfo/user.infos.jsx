import React from "react";
import "./usersInfo.styles.css";
import { Avatar } from "../Avatar/avatar.index";

/**
 * Render user infos component
 */
export const UserInfos = ({ user }) => (
  <div className="current-user">
    <Avatar user={user.username} />
    <div>{user.username}</div>
  </div>
);
