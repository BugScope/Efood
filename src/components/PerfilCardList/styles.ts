import styled from "styled-components";
import logo from "../../assets/Images/logorestaurante.png";
import { Cores } from "../../styles/reset";

export const PerfilCardListImg = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 56px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-size: 32px;
  color: ${Cores.branco};

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 26px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .pequeno {
    font-weight: 100;
  }

  .grande {
    font-weight: 900;
  }
`;

export const PerfilCardListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
