import React from "react";
import carsData from "data/carsdata";

import CarList from "@/components/templates/carList";

const Hybrid = () => {
  const hybridCars = carsData.filter((car) => car.category === "Hybrid");

  return <CarList data={hybridCars} />;
};
export default Hybrid;
