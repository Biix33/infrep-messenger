import React from "react";
import Navbar from "../Navbar/navbar.index";
import Signup from "../Signup/signup.index";
import { Redirect } from "react-router";

export const Profil = props => {
  const navItems = [
    {
      name: "Chat",
      link: "/chat",
      onClick: () => <Redirect to="/chat" />
    },
    {
      name: "Se déconnecter",
      link: "/logout",
      onClick: () => <Redirect to="/logout" />
    }
  ];
  return (
    <div className="user__profil">
      <Navbar navLinks={navItems} />
      <Signup user={JSON.parse(props.user)} />
    </div>
  );
};
