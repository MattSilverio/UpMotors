import React from 'react'
import {Link} from 'react-router-dom'
import { LiHeader, UlHeader , NavHeader} from './style'

export default function Header(){
  const abas = [
    {
      aba: "Início",
      rota: "/inicio"
    },
    {
      aba: "Catálogo",
      rota: "/catalogo"
    },
    {
      aba: "Contato",
      rota: "/contato"
    },
  ]

  return(
    <>
      <NavHeader>
        <h2>UpMotors</h2>
        <UlHeader>
          {abas.map((aba) => {
            return (
              <LiHeader><Link to={aba.rota}>{aba.aba}</Link></LiHeader>
            )
          })}                   
        </UlHeader>
      </NavHeader>
    </>
  )
}