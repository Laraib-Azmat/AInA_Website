import React from "react";
import styles from "./Header.module.css";

import HeaderText from "./HeaderText";

export default function Header() {
  return (
    <div id="home" className={styles["main-head"]}>
      <HeaderText />
    </div>
  );
}
