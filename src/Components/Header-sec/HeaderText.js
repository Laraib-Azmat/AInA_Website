import React from "react";
import styles from "./HeaderText.module.css";
import headerImg from "../../assets/Images/headerImage.png";

export default function HeaderText() {
  return (
    <div className={styles["header-content"]}>
      <div className={styles["text-side"]}>
        <h2>
          Welcome to <span>AInA</span>: Reflection Meets Innovation!
        </h2>
        <h3>Artificial Intelligence Mirror based Affective Mirror</h3>
        <p>
          Discover yourself, Uncover Emotions: AInA Mirror, the fusion of
          reflection and innovation, transforms your mirror into a portal of
          emotional exploration. Witness your emotions come alive on the
          reflective surface while screen behind immerses you in the world of
          personlized experiences.{" "}
        </p>
      </div>

      <div className={styles["header-img"]}>
        <img src={headerImg} alt="header_image"></img>
      </div>
    </div>
  );
}
