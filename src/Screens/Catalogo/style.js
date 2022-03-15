import styled from "styled-components";

export const DivGrid = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
  background: snow;
`

export const DivCard = styled.div`
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const CarName = styled.p`
  text-align: center;
  font-weight: 500;
`