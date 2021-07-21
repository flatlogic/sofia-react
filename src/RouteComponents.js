import React from "react";
import Login from "./pages/login/Login";
import { logoutUser } from "./actions/auth";
import { Redirect, Route } from "react-router";

export const AdminRoute = ({ currentUser, dispatch, component, ...rest }) => {
  if (!currentUser || currentUser.role !== 'admin' || !Login.isAuthenticated(localStorage.getItem('token'))) {
    return (<Redirect to="/template"/>)
  } else if (currentUser && currentUser.role === 'admin') {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};

export const UserRoute = ({ dispatch, component, ...rest }) => {
  if (!Login.isAuthenticated()) {
    dispatch(logoutUser());
    return (<Redirect to="/login"/>)
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};

export const AuthRoute = ({ dispatch, component, ...rest }) => {
  const { from } = rest.location.state || { from: { pathname: '/template'} };

  if (Login.isAuthenticated()) {
    return (
      <Redirect to={from} />
    );
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    )
  }
}
