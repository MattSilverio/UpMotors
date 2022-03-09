import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogo from "../Screens/Catalogo";
import Home from "../Screens/Home";
import Contato from "../Screens/Contato"

export default function Rotas(){
  return(
    <Routes>
      <Route component= {Home} path="/"/>
      <Route component={Catalogo} path="/catalogo"/>
      <Route component={Contato} path="/contato"/>
    </Routes>
  )
}