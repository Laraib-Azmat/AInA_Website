import React from "react";
import testimonials from "../../assets/Testimonial.json";
import Button from "../UI/Button";

import styles from "./About.module.css";

export default function About() {
  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="testimonial" className={styles["testimonials-container"]}>
      <h2 className={styles["test-header"]}>Testimonials</h2>
      <div className={styles["testimonials"]}>
        {testimonials.testimonial.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p>
              <i>"{testimonial.text}"</i>
            </p>
            <p className={styles.name}>{testimonial.name}</p>
            <Button
              onClick={() => handleContactClick(testimonial.email)}
              className={styles["contact-button"]}
            >
              {testimonial.contact}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
