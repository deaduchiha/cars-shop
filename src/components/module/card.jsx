import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`cars/${id}`}>
      <div className={styles.container}>
        <img src={image} alt={name} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.details}>{`${year}. ${distance}km`}</p>
        <div className={styles.footer}>
          <span>{`$ ${price}`}</span>
          <div className={styles.location}>
            <span>{`${location}`}</span>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
