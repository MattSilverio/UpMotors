import React from "react";
import { DivCard, Titulo, Preco , Container, Motor, DivContainer, ImgCar} from "./style";

export default function Carro({nome, preco, motor, image}){
  return(
    <DivCard>        
      <DivContainer >
        <ImgCar src={image} alt="Um carro esportivo" />
        <Container>
          <Titulo>{nome}</Titulo>
          <Preco>{preco}</Preco>
          <Motor>{motor}</Motor>
        </Container>
      </DivContainer>
    </DivCard>
  )
}