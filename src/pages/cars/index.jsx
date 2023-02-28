import React from "react";
import CarsPage from "@/components/templates/carsPage";
import carsData from "data/carsdata";

const Cars = () => {
  return (
    <>
      <CarsPage data={carsData} />
    </>
  );
};
export default Cars;
