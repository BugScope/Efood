import styled from "styled-components";
import fundo from "../../assets/Images/fundo.svg";
import { Cores } from "../../styles/reset";

export const Header = styled.div`
  display: block;
  max-width: 100vw;
  width: 100%;
  height: 384px;
  background-image: url(${fundo});
  text-align: center;

  img {
    margin-top: 64px;
  }

  h1 {
    margin: 138px 0 40px 0;
    font-size: 36px;
    color: ${Cores.vermelho};
  }
`;
