import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import * as S from "./styles";

const PerfilMenu = () => {
  return (
    <S.Header>
      <S.HeaderItens>
        <Link to={"/"}>Restaurantes</Link>
        <img src={logo} alt="" />
        <p>0 produto(s) no carrinho</p>
      </S.HeaderItens>
    </S.Header>
  );
};

export default PerfilMenu;
