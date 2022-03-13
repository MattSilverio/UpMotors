import React from "react";


// tentar passar o objeto via props em routes

export default function Catalogo(props){
  return (
    <>
      <h2>Catalogo</h2>
      <div>
        {props.cars.map((car) => {
          return(
            <div key={car.id}>
              <img  src={car.path} alt="Error" /> 
            </div>
          )
        })}
      </div>
    </>
  )
}