import React from "react";
import carsData from "data/carsdata";

//components
import CarsPage from "@/components/templates/carsPage";
import Categories from "@/components/module/Categories";
import { SearchBar } from "@/components/module/searchBar";

const Cars = () => {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
};
export default Cars;
