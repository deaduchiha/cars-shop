import React from "react";
import carsData from "data/carsdata";

import CarList from "@/components/templates/carList";

const Suv = () => {
  const suvCars = carsData.filter((car) => car.category === "SUV");

  return <CarList data={suvCars} />;
};
export default Suv;
