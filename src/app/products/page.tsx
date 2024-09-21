"use client";
import { useGetAllCarsQuery } from "@/Redux/api/baseApi";
import { Car } from "@/types";
import React from "react";
// for server or normal next er jonno
// const AllDataPage = async () => {
//   const res = await fetch("https://car-rental-server5.vercel.app/api/cars");
//   const allCars = await res.json();
//   console.log(allCars.data);
//   return (
//     <div>
//       <h1>Show AllDataPage:{allCars.data.length}</h1>
//       <div>
//         {allCars.data.map((car) => (
//           <div key={car._id}>{car.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// for redux data getting
const AllDataPage = () => {
  const { data: Cars } = useGetAllCarsQuery("");
  const allCars = Cars?.data;
  //   throw new Error();
  return (
    <div>
      <h1>Show AllDataPage:{allCars?.length}</h1>
      <div>
        {allCars?.map((car: Car) => (
          <div key={car._id}>{car.name}</div>
        ))}
      </div>
    </div>
  );
};

export default AllDataPage;
