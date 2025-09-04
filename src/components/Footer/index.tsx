import * as S from "./styles";
import logo from "../../assets/Images/logo.svg";
import x from "../../assets/Images/x.svg";
import facebook from "../../assets/Images/facebook.svg";
import instagram from "../../assets/Images/instagram.svg";

const Footer = () => {
  return (
    <S.FooterContainer>
      <img src={logo} alt="" />
      <S.SocialMedia>
        <img src={x} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </S.SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela
        entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </p>
    </S.FooterContainer>
  );
};

export default Footer;
