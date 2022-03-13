import React from "react";
import { cars } from "../../Assets/Utils/cars";


export default function Catalogo({}){
  return (
    <>
      <h2>Catalogo</h2>
      {cars.map((car) => {
        return(
          <>
            <img src={car.path} alt="Error" /> 
          </>
        )
      })}
    </>
  )
}