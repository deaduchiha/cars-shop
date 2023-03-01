/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./carsDetails.module.css";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const CarDetails = (props) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.header}>{`${name} ${model}`}</h3>
      <div className={styles.details}>
        <div>
          <FontAwesomeIcon icon={faCar} />
          <p>Name: </p>
          <span>{name}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSlack} />
          <p>model: </p>
          <span>{model}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} />
          <p>Date-Created: </p>
          <span>{year}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faRoad} />
          <p>Distance: </p>
          <span>{distance}kms</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Location: </p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.descriptionTitle}>Extra Information</p>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <FontAwesomeIcon icon={faMoneyBill} />
          <p>Price: </p>
          <span>{price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
};
export default CarDetails;
