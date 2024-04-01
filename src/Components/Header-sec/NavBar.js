import React from "react";
import NavItem from "./NavItem";
import logo from "../../assets/Images/logo.png";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["logo-sec"]}>
        <img className={styles.logo} src={logo} alt="logo"></img>
        <h2>AInA Mirror</h2>
      </div>

      <NavItem />
    </div>
  );
}
