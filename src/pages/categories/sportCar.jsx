import React from "react";
import carsData from "data/carsdata";

import CarList from "@/components/templates/carList";

const SportCar = () => {
  const sportCars = carsData.filter((car) => car.category === "Sport Car");

  return <CarList data={sportCars} />;
};
export default SportCar;
