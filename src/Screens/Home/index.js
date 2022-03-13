import React from "react";
import { Link } from "react-router-dom";
import showRoom from "../../Assets/Images/img-home.jpg"
import { DivGreeting, ImgHome } from "./style";

export default function Home(){
  return (
    <>
      <DivGreeting>
        <h2>Bem Vindo, a <span style={{color: "#fdca40"}}>Up</span>Motors</h2>
        <p>Visite o nosso <Link to="/catalogo">catálogo</Link></p>
      </DivGreeting>
      <ImgHome src={showRoom} alt="Showroom de carros"/>
    </>
  )
}

