import React from "react";
import { useRouter } from "next/router";

import carsData from "data/carsdata";
import CarList from "@/components/templates/carList";

const FilterCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filterData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filterData.length) return <h3>Not found</h3>;

  return <CarList data={filterData} />;
};

export default FilterCars;
