import React from "react";
import styles from "./Categories.module.css";
import Link from "next/link";

const Categories = () => {
  return (
    <div className={styles.container}>
      <Link href="categories/suv">
        <div>
          <p>SUV</p>
        </div>
      </Link>
      <Link href="categories/sportCar">
        <div>
          <p>Sport Car</p>
        </div>
      </Link>
      <Link href="categories/sedan">
        <div>
          <p>Sedan</p>
        </div>
      </Link>
      <Link href="categories/hybrid">
        <div>
          <p>Hybrid</p>
        </div>
      </Link>
    </div>
  );
};
export default Categories;
