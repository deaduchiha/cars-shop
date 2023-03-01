import React from "react";
import carsData from "data/carsdata";

const Sedan = () => {
  const sedanCars = carsData.filter((car) => car.category === "Sedan");
  console.log(sedanCars);
  return (
    <>
      <div>Sedan</div>
    </>
  );
};
export default Sedan;
