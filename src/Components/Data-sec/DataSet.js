import styles from "./DataSet.module.css";
import Data from "./Data";

export default function DataSet() {
  return (
    <div id="dataset">
      <h2 className={styles["Data_Set_Header"]}>Data Set Collection</h2>

      <Data />
    </div>
  );
}
