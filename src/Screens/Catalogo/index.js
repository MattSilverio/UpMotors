import React from "react";
import { cars } from "../../Assets/Utils/cars";
import { DivCard, DivGrid } from "./style";
import { Link } from "react-router-dom";

export default function Catalogo(){
  return (
    <>
      <DivGrid>
        {cars?.map((car) => {
          return(
            <DivCard key={car.id}>
              <Link to={car.path}><img src={car.image} alt="Error" width={200}/> </Link>
              <p>{car.nome}</p>
            </DivCard>
          )
        })}
      </DivGrid>
    </>
  )
}