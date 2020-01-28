import React from "react";
import { UserInfos } from "./user.infos";

export const UserList = ({list}) => (
  <ul className="user__list">
    {list.map((user, i) => {
      return (
        <li key={i} className="nav-link">
          <UserInfos user={user} classNames={['current-user']}/>
        </li>
      );
    })}
  </ul>
);
