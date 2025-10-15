import Button from "../Button";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  const removeItem = (title: string) => {
    dispatch(remove(title));
  };

  function formatarPreco(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    console.log(items.map((item) => item.title)),
    (
      <>
        <S.Overlay onClick={closeCart} className={isOpen ? "is-open" : ""} />
        <S.CartContainer className={isOpen ? "is-open" : ""}>
          <div>
            <S.CartListItem>
              {items.map((item) => (
                <S.CartItem key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <div>
                    <p className="grande">{item.title}</p>
                    <p className="pequeno">{formatarPreco(item.preco as number)}</p>
                  </div>
                  <S.CartButton onClick={() => removeItem(item.title!)}></S.CartButton>
                </S.CartItem>
              ))}
            </S.CartListItem>
          </div>
          <S.CartValue>
            <p>Valor Total:</p>
            <p>{formatarPreco(getTotalPrice())}</p>
          </S.CartValue>
          <Button tipo="perfil">Continuar com a Entrega</Button>
        </S.CartContainer>
      </>
    )
  );
};

export default Cart;
