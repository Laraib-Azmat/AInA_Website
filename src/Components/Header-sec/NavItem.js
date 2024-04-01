import React, { useState, useEffect } from "react";
import styles from "./NavItem.module.css";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function NavItem() {
  return (
    <ul className={` ${styles["nav-list"]}`}>
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          exact
          activeClassName={styles.icon}
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faHouse} />
          </span>
          <span className={styles.text}>Home</span>
        </Link>
      </li>

      <li>
        <Link
          to="dataset"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faDatabase} />
          </span>
          <span className={styles.text}>DataSet</span>
        </Link>
      </li>

      <li>
        <Link
          to="testimonial"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
          <span className={styles.text}>Testimonial</span>
        </Link>
      </li>

      <li>
        <Link
          to="emotions"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faFaceSmile} />
          </span>
          <span className={styles.text}>Emotions</span>
        </Link>
      </li>

      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className={styles["icon"]}>
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <span className={styles.text}>Contact</span>
        </Link>
      </li>
    </ul>
  );
}
