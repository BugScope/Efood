import styled from "styled-components";
import { Cores } from "../../styles/reset";

export const Card = styled.div`
  width: 320px;
  height: 380px;
  font-family: "Roboto", sans-serif;
  color: ${Cores.bege};
  background-color: ${Cores.vermelho};
`;

export const CardContainer = styled.div`
  padding: 8px;
`;

export const CardBannerImg = styled.div`
  position: relative;
  text-align: center;

  img {
    margin-top: 8px;
    width: 305px;
    height: 210px;
  }
`;

export const CardInfo = styled.div`
  margin: 8px 0 16px 0;

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`;

export const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;
