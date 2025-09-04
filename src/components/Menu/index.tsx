import logo from "../../assets/Images/logo.svg";
import * as S from "./styles";

const Menu = () => {
  return (
    <S.Header>
      <img src={logo} alt="" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </S.Header>
  );
};

export default Menu;
