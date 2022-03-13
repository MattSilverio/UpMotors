import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogo from "../Screens/Catalogo";
import Home from "../Screens/Home";
import Contato from "../Screens/Contato";
import { cars } from "../Assets/Utils/cars";


export default function Rotas(){
  return(
    <Routes>
      <Route element= {<Home/>} path="/"/>
      <Route element={<Catalogo cars={cars}/>} path="/catalogo"/>
      <Route element={<Contato/>} path="/contato"/>
    </Routes>
  )
}