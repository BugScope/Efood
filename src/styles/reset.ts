import { createGlobalStyle } from "styled-components";

export const Cores = {
  branco: "#FFFFFF",
  begeclaro: "#FFF8F2",
  bege: "#FFEBD9",
  preto: "#000000",
  cinza: "#484747ff",
  cinzaClaro: "#757272ff",
  azul: "#4885e9ff",
  vermelho: "#E66767",
  verde: "#0f9d58ff",
};

export const ResetStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
}

body {
    background-color: ${Cores.begeclaro};
}
`;
