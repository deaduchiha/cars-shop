import React from "react";
import carsData from "data/carsdata";

import CarList from "@/components/templates/carList";

const Sedan = () => {
  const sedanCars = carsData.filter((car) => car.category === "Sedan");

  return <CarList data={sedanCars} />;
};
export default Sedan;
