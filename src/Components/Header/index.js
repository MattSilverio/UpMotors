import React from 'react'
import { LiHeader, UlHeader , NavHeader, LinkHeader, TitleHeader} from './style'
import { abas } from '../../Assets/Utils/abas'

export default function Header(){
  return(
    <>
      <NavHeader>
        <TitleHeader>Up<span style={{color: "#e9ebf8"}}>Motors</span></TitleHeader>
        <UlHeader>
          {abas.map((aba) => {
            return (
              <LiHeader key={aba.id}><LinkHeader to={aba.rota}>{aba.aba}</LinkHeader></LiHeader>
            
              )
          })}                          
        </UlHeader>
      </NavHeader>
    </>
  )
}