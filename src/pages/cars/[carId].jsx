import React from "react";
import { useRouter } from "next/router";
import carsData from "data/carsdata";
import CarDetails from "@/components/templates/carsDetails";

const CarId = () => {
  const router = useRouter();

  const carId = router.query.carId;
  const carDetails = carsData[carId - 1];

  console.log(carDetails);

  return <CarDetails {...carDetails} />;
};

export default CarId;
