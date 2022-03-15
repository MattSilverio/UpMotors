import React from "react";

export default function Carro({nome, preco, motor, image}){
  return(
    <div>
      <img src={image} alt="Um carro esportivo" width={600}/>
      <h2>{nome} <span>{preco}</span></h2>
      <p>{motor}</p>
    </div>
  )
}