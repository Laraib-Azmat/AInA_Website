import React from "react";
import data from "../../assets/cards.json";
import cardImg from "../../assets/Images/CardImg.png";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.content}>
        {data.content1.map((item, index) => (
          <Card heading={item.heading} desc={item.desc} key={index} />
        ))}
      </div>

      <img
        className={styles["centre-image"]}
        src={cardImg}
        alt="Image_card"
      ></img>

      <div className={styles.content}>
        {data.content2.map((item, index) => (
          <Card heading={item.heading} desc={item.desc} key={index} />
        ))}
      </div>
    </div>
  );
}
