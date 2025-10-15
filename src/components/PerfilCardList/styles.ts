import styled from "styled-components";
import { Cores } from "../../styles/reset";

type PerfilCardCssProps = {
  capaCss: string;
};

export const PerfilCardListImg = styled.div<PerfilCardCssProps>`
  width: 100%;
  height: 300px;
  margin-bottom: 56px;
  background-image: url(${(props) => props.capaCss});
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

export const Modal = styled.div`
  &.visible {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    content: "";
  }
`;

export const ModalContainer = styled.div`
  background-color: ${Cores.vermelho};
  max-width: 1024px;
  position: fixed;
  top: 30%;
  left: 22%;
  width: 100%;
  height: 344px;
  z-index: 2;
`;

export const ModalClose = styled.div`
  padding: 8px;
  text-align: end;
  cursor: pointer;

  > img {
    width: 16px;
    height: 16px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  column-gap: 24px;
  padding: 0 32px 32px 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${Cores.branco};

  > img {
    height: 280px;
    width: 280px;
  }

  h2 {
    padding-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  span {
    padding: 16px 0;
    display: block;
  }
`;

export const ModalButton = styled.button`
  max-width: 220px;
  width: 100%;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${Cores.bege};
  color: ${Cores.vermelho};
  border: none;
  cursor: pointer;
`;
