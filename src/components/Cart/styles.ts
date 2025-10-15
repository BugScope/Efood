import styled from "styled-components";
import { Cores } from "../../styles/reset";
import lixeira from "../../assets/Images/lixeira.svg";

export const CartContainer = styled.div`
  background-color: ${Cores.vermelho};
  max-width: 360px;
  width: 100%;
  padding: 0 8px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: none;

  &.is-open {
    display: block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  display: none;

  &.is-open {
    display: block;
  }
`;

export const CartListItem = styled.ul`
  margin: 32px 0 40px 0;
`;

export const CartItem = styled.li`
  background-color: ${Cores.bege};
  display: flex;
  position: relative;
  padding: 8px;
  margin-bottom: 16px;
  color: ${Cores.vermelho};

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  .grande {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .pequeno {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CartValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  color: ${Cores.bege};
  font-weight: 700;
  font-size: 14px;
`;

export const CartButton = styled.button`
  background-image: ${`url(${lixeira})`};
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
`;
