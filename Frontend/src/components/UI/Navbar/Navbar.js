import React from "react";
import NavbarItem from "./NavbarItem";
import classes from "./Navbar.module.css";
import logFunc from "../Login/LoginLogoutFunc";

const Navbar = (props) => {
  const { login, logout } = logFunc();

  function logoutHandler() {
    logout();
  }
  return (
    <div className={`${classes.list}`}>
      <div className={`${classes.left}`}>
        <NavbarItem item="Generette" link="/" />
      </div>
      <div className={`${classes.right}`}>
        <NavbarItem item="Home" link="/" />
        <NavbarItem item="Profile" link="/profile" />
        {props.user ? (
          <NavbarItem item="Logout" onLogout={logoutHandler} />
        ) : (
          <NavbarItem item="Login" link="/login" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
