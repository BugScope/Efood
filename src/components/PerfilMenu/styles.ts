import styled from "styled-components";
import fundo from "../../assets/Images/fundo.svg";
import { Cores } from "../../styles/reset";

export const Header = styled.div`
  background-image: url(${fundo});
  max-width: 100vw;
  width: 100%;
  height: 150px;
`;

export const HeaderItens = styled.div`
  display: flex;
  text-align: center;
  padding-top: 40px;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  a,
  p {
    color: ${Cores.vermelho};
    font-weight: 700;
  }
`;
