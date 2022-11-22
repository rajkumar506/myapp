import React from "react";
import styles from "./Layout.module.scss";
import { NavLink } from "react-router-dom";
export const Layout = ({ children }) => {
  const navLinkStyles = (isActive) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <>
      <header className={`${styles["header"]}`}>
        <nav>
          <NavLink style={navLinkStyles} to="/">
            Home
          </NavLink>
          <NavLink style={navLinkStyles} to="/about">
            About
          </NavLink>
          <NavLink to="order-summary">order-summary</NavLink>
        </nav>
        {}
      </header>
      {children}
    </>
  );
};
