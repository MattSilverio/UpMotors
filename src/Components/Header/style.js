import { Link } from "react-router-dom";
import styled from "styled-components";

export const LiHeader = styled.li`
  margin-left: 25px;
  text-transform: uppercase;
`
export const UlHeader = styled.ul`
  display:flex;
  list-style:none;
`

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #080708;
`

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: #e9ebf8;
`
export const TitleHeader = styled.h2`
  color: #fdca40
`