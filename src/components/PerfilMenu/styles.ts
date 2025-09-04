import styled from "styled-components";
import fundo from "../../assets/Images/fundo.svg";

export const Header = styled.div`
  background-image: url(${fundo});
  max-width: 100vw;
  width: 100%;
  height: 150px;
`;

export const HeaderItens = styled.div`
  display: block;
  text-align: center;
  position: relative;
  padding-top: 40px;

  a {
    position: absolute;
    top: 50%;
    left: 10%;
  }

  p {
    position: absolute;
    top: 60%;
    right: 10%;
  }
`;
