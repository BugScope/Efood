import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import * as S from "./styles";

const PerfilMenu = () => {
  return (
    <S.Header>
      <S.HeaderItens>
        <div>
          <a>
            <Link to={"/"}>Restaurantes</Link>
          </a>
        </div>
        <img src={logo} alt="" />
        <div>
          <p>0 produto(s) no carrinho</p>
        </div>
      </S.HeaderItens>
    </S.Header>
  );
};

export default PerfilMenu;
