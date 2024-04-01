import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  console.log(props);
  return (
    <div className={styles.card}>
      <h3>{props.heading}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
