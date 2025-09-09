import styled from "styled-components";
import { Cores } from "../../styles/reset";

type ButtonPropsCSS = {
  tipoCSS?: "menu" | "perfil";
};

export const Buttons = styled.a<ButtonPropsCSS>`
  display: block;
  font-weight: 700;
  text-align: center;
  width: ${(props) => (props.tipoCSS === "perfil" ? "100%" : "20%")};
  padding: 8px;
  border: none;
  background-color: ${(props) => (props.tipoCSS === "perfil" ? Cores.bege : Cores.vermelho)};

  a {
    color: ${(props) => (props.tipoCSS === "perfil" ? Cores.bege : Cores.vermelho)};
    font-size: 14px;
  }
`;
