import Cards from "./Cards";
import styles from "./Emotion.module.css";

export default function Emotion() {
  return (
    <div id="emotions" className={styles.emotion}>
      <h1>
        Your <span> Emotions </span> Your Experience
      </h1>
      <p>Understand yourself. Experience the future.</p>
      <Cards />
    </div>
  );
}
