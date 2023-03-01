import React from "react";
import carsData from "data/carsdata";

//components
import CarsPage from "@/components/templates/carsPage";
import Categories from "@/components/module/Categories";

const Cars = () => {
  return (
    <>
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
};
export default Cars;
