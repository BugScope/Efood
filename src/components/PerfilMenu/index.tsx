import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";

const PerfilMenu = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <S.Header>
      <S.HeaderItens>
        <Link to={"/"}>Restaurantes</Link>
        <img src={logo} alt="" />
        <S.CartButton onClick={openCart}>{items.length} produto(s) no carrinho</S.CartButton>
      </S.HeaderItens>
    </S.Header>
  );
};

export default PerfilMenu;
