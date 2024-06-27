// Loader.jsx
import React from "react";
import styles from "./Loader.module.scss"; // Adjust styles as per your project

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default Loader;
