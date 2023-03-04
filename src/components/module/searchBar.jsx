import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { useRouter } from "next/router";
export const SearchBar = () => {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Enter maximum or minimum price!");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          value={min}
          type="text"
          placeholder="Inter min-price"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          value={max}
          type="text"
          placeholder="Inter max-price"
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};
