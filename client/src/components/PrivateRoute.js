import React from "react";
import API from "../services/API";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!API.isAuthenticated()) {
        return <Redirect to="/" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);
