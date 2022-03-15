import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogo from "../Screens/Catalogo";
import Home from "../Screens/Home";
import Contato from "../Screens/Contato";
import { cars } from "../Assets/Utils/cars";
import Carro from "../Screens/Carro";


export default function Rotas(){
  return(
    <Routes>
      <Route element= {<Home/>} path="/"/>
      <Route element={<Catalogo/>} path="/catalogo"/>
      <Route element={<Contato/>} path="/contato"/>
      {cars.map((car) => {
        return(
          <Route path={car.path} element={<Carro nome={car.nome} preco={car.preco} motor={car.motor} image={car.image}/>} key={car.id}/>
        )
      })}
    </Routes>
  )
}