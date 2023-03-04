import React from "react";
import CarsPage from "@/components/templates/carsPage";
import Categories from "@/components/module/Categories";
import { SearchBar } from "@/components/module/searchBar";
import AllButton from "@/components/module/allButton";

import carsData from "data/carsdata";

const Home = () => {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </>
  );
};
export default Home;
