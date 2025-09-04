import styled from "styled-components";
import { Cores } from "../../styles/reset";

export const FooterContainer = styled.footer`
  display: block;
  width: 100%;
  margin-top: 120px;
  text-align: center;
  padding: 40px 0;
  background-color: ${Cores.bege};
  align-items: center;
  color: ${Cores.vermelho};

  p {
    max-width: 610px;
    margin: 0 auto;
    font-size: 12px;
    font-weight: 400px;
  }
`;

export const SocialMedia = styled.div`
  margin: 32px 0 80px 0;
`;
