import React from "react";
import styles from "./Data.module.css";
import Button from "../UI/Button";

import DataImg from "../../assets/Images/DataSet.png";

export default function Data() {
  return (
    <div className={styles["Data_Set_Div"]}>
      <div className={styles["Data_Set_Text"]}>
        <h2>Be a Part of Emotion Analysis Revolution:</h2>
        <div className={styles["Data_Set_List"]}>
          <ul>
            <li>
              Contribute Your Emotions:
              <span className={styles["Data_Set_Span"]}>
                Click and record a video or capture images right from your
                device. Your expressions, your contribution.
              </span>
            </li>
            <li>
              Easy and Secure:
              <span className={styles["Data_Set_Span"]}>
                Our user friendly interface ensures a hassle free experience.
                Your data is encryped and secured.
              </span>
            </li>
            <li>
              Help Us Understand Better:
              <span className={styles["Data_Set_Span"]}>
                Your emotions fuel our research. By sharing your expressions,
                You're advancing the future of emotion recognition.
              </span>
            </li>
            <li>
              Join the Emotion Mirror:
              <span className={styles["Data_Set_Span"]}>
                Become a vital part of our emotion analysis journey. Start
                recording now and be part of something extraordinary.
              </span>
            </li>
          </ul>
        </div>
        <div className={styles["Data_Set_Button_Div"]}>
          <Button>Start Recording</Button>
        </div>
      </div>
      <div className={styles["Data_Set_Image"]}>
        <img src={DataImg} alt="dataset_image"></img>
      </div>
    </div>
  );
}
