import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import emailjs from "@emailjs/browser";

import styles from "./Form.module.css";

export default function Form() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setSent(true);

    emailjs
      .sendForm(
        "service_05tm4ij",
        "template_a0yazuh",
        form.current,
        "wWbb2c9phUC-l3ssR"
      )
      .then((response) => {
        <h1>Error find in sending email</h1>;
      })
      .catch((error) => {
        console.log("Error sending email");
      });
  };

  const clearForm = () => {
    form.current.reset();
  };

  return (
    <form
      onSubmit={formHandler}
      ref={form}
      className={`${styles["contact-form"]} ${sent && styles.send}`}
    >
      <small>Enter message and click button "Send"</small>
      <div className={`${styles.wrapper}  ${styles.centered}`}>
        <article className={styles.letter}>
          <div className={styles.side}>
            <h1>Contact us</h1>
            <p>
              <textarea required name="message" placeholder="Your message" />
            </p>
          </div>
          <div className={styles.side}>
            <p>
              <input
                type="text"
                name="to_name"
                placeholder="Your name"
                required
              />
            </p>
            <p>
              <input type="email" name="from_email" placeholder="Your email" />
            </p>
            <p className={styles.controls}>
              <Button id="sendLetter">Send</Button>
              <Button onClick={clearForm} id="sendLetter">
                Clear
              </Button>
            </p>
          </div>
        </article>
        <div className={`${styles.envelope}  ${styles.front}`}></div>
        <div className={`${styles.envelope}  ${styles.back}`}></div>
      </div>

      <p className={`${styles["result-message"]}  ${styles.centered}`}>
        {" "}
        Thank you for your message{" "}
      </p>
    </form>
  );
}
