import styled from "styled-components";
import { Cores } from "../../styles/reset";

export const Card = styled.div`
  width: 480px;
  height: auto;
  font-family: "Roboto", sans-serif;
  color: ${Cores.vermelho};
  background-color: ${Cores.branco};
`;

export const CardContainer = styled.div`
  padding: 8px;
`;

export const CardBannerImg = styled.div`
  position: relative;

  > img {
    max-width: 480px;
    max-height: 320px;
    width: 100%;
    height: 100%;
  }
`;

export const CardBannerInfo = styled.p`
  position: absolute;
  display: flex;
  top: 0%;
  right: 0%;
  margin: 16px;

  div {
    margin-right: 8px;
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

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 8px;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
