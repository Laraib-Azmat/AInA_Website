import React from "react";
import { Link } from "react-scroll";
import styles from "./footer.module.css";
import logo from "../../assets/Images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-name"]}>
        <img className={styles["footer-logo"]} src={logo}></img>
        <h2>AiNa-Mirror</h2>
      </div>

      <div className={styles.newsletter}>
        <h2>About Us!</h2>
        <p>
          AInA Mirror is redefining reflections by being an emotional companion,
          responding with tailored content. Join for exclusive updates and a
          community shaping the future of mirrors.{" "}
        </p>
        <a
          className={styles["footer-email"]}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles["email-logo"]} icon={faEnvelope} />
          Email
        </a>
      </div>

      <div className={styles["social-media"]}>
        <h2>Social Media</h2>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
          Instagram
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
          LinkedIn
        </a>
        <a
          id="facebook-logo"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-facebook"></ion-icon>
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
