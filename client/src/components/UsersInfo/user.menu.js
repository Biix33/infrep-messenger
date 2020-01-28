import React from "react";

export const UserMenu = () => (
  <div className="user__menu">
    <a href="/me" className="nav-link">
      Mon profil
    </a>
    <a href="/logout" className="nav-link">
      Se déconnecter
    </a>
  </div>
);
