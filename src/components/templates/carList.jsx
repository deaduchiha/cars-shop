import React from "react";
import { useRouter } from "next/router";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./carList.module.css";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "../module/card";

const CarList = ({ data }) => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <FontAwesomeIcon icon={faCaretLeft} />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};
export default CarList;
