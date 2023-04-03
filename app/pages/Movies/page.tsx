import React from "react";
import styles from "../../page.module.css";
import MoviesPageComponent from "./moviesPage";

const MoviesPage = () => {
  return (
    <div className={styles.main}>
      <MoviesPageComponent />
    </div>
  );
};

export default MoviesPage;
