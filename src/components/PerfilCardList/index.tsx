import PerfilCard, { type CardProps } from "../PerfilCard";
import * as S from "./styles";
import { useGetRestauranteByIdQuery } from "../../services/api";
import { useState } from "react";
import fechar from "../../assets/Images/fechar.svg";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/cart";

type CardListprops = {
  idRestaurante: string;
};

const PerfilCardList = ({ idRestaurante }: CardListprops) => {
  const { data: restaurante } = useGetRestauranteByIdQuery(idRestaurante);

  const [cardSelecionado, setCardSelecionado] = useState<CardProps | null>(null);

  const [estaAberto, setEstaAberto] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(cardSelecionado!));
  };

  const getDescricao = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 70) + `...`;
    }
    return desc;
  };

  function formatarPreco(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (!restaurante) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <S.PerfilCardListImg capaCss={restaurante?.capa}>
        <div>
          <p className="pequeno">{restaurante?.tipo}</p>
          <p className="grande">{restaurante?.titulo}</p>
        </div>
      </S.PerfilCardListImg>
      <S.PerfilCardListContainer>
        {restaurante.cardapio.map((car) => (
          <PerfilCard
            key={car.id}
            description={getDescricao(car.descricao)}
            title={car.nome}
            img={car.foto}
            onSelecionar={() => {
              setCardSelecionado({
                title: car.nome,
                description: car.descricao,
                img: car.foto,
                porcao: car.porcao,
                preco: car.preco,
              });
              setEstaAberto(true);
            }}
          />
        ))}
      </S.PerfilCardListContainer>

      {estaAberto && cardSelecionado && (
        <S.Modal className="visible">
          <S.ModalContainer>
            <S.ModalClose>
              <img src={fechar} alt="" onClick={() => setEstaAberto(false)} />
            </S.ModalClose>
            <S.ModalContent>
              <img src={cardSelecionado.img} alt="" />
              <div>
                <h2>{cardSelecionado.title}</h2>
                <p>{cardSelecionado.description}</p>
                <span>Serve: de {cardSelecionado.porcao}</span>
                <S.ModalButton onClick={addToCart}>
                  Adiconar ao Carrinho - {formatarPreco(cardSelecionado.preco as number)}
                </S.ModalButton>
              </div>
            </S.ModalContent>
          </S.ModalContainer>
          <div className="overlay" onClick={() => setEstaAberto(false)}></div>
        </S.Modal>
      )}
    </div>
  );
};

export default PerfilCardList;
