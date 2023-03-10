import React from "react";

import styles from "./carsPage.module.css";
import Card from "../module/card";

const CarsPage = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </>
  );
};

export default CarsPage;
