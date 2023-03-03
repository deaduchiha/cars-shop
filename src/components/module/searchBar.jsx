import React from "react";
import styles from "./searchBar.module.css";
export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <input type="text" placeholder="Inter min-price" />
        <input type="text" placeholder="Inter max-price" />
      </div>
      <button>Search</button>
    </div>
  );
};
