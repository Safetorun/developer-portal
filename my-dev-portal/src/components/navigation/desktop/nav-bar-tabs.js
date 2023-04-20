import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      {!isAuthenticated && (
        <NavBarTab path="/" label="Home" />
      )}   
      {isAuthenticated && (
        <>
          <NavBarTab path="/settings" label="Settings" />
          <NavBarTab path="/dashboard" label="Dashboard" />
          <NavBarTab path="/keys" label="Keys" />
        </>
      )}
    </div>
  );
};
