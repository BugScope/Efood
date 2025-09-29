import PerfilCard, { type CardProps } from "../PerfilCard";
import * as S from "./styles";
import { useEffect, useState } from "react";
import type { CardapioModal } from "../Card";
import type { RstaurantesModal } from "../CardList";
import fechar from "../../assets/Images/fechar.svg";
import Button from "../Button";

type CardListprops = {
  idRestaurante: string;
};

const PerfilCardList = ({ idRestaurante }: CardListprops) => {
  const [cardapio, SetCardapio] = useState<CardapioModal[]>([]);
  const [restaurante, SetRestaurante] = useState<RstaurantesModal>();
  const [cardSelecionado, setCardSelecionado] = useState<CardProps | null>(null);
  const [estaAberto, setEstaAberto] = useState(false);

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${idRestaurante}`)
      .then((res) => res.json())
      .then((res) => {
        SetCardapio(res.cardapio);
        SetRestaurante(res);
      });
  }, [idRestaurante]);

  const getDescricao = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 70) + `...`;
    }
    return desc;
  };

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div>
      <S.PerfilCardListImg capaCss={restaurante?.capa as string}>
        <div>
          <p className="pequeno">{restaurante?.tipo}</p>
          <p className="grande">{restaurante?.titulo}</p>
        </div>
      </S.PerfilCardListImg>
      <S.PerfilCardListContainer>
        {cardapio.map((car) => (
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
                <Button tipo="perfil">
                  Adiconar ao Carrinho - {formatarPreco(cardSelecionado.preco)}
                </Button>
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
