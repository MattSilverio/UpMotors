import React from "react";
import Footer from "../../Components/footer";
import location from "../../Assets/Images/img-location.jpg"
import { ImgContato } from "./style";

export default function Contato(){
  return(
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}><ImgContato src={location} alt="Mapa do local"/></div>
      <Footer/>
    </>
  )
}