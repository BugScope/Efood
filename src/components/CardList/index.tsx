import Card from "../../components/Card";

import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

export type RstaurantesModal = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    id: number;
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  };
};

const CardList = () => {
  const [restaurantes, setRestaurantes] = useState<RstaurantesModal[]>([]);

  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => {
        setRestaurantes(data);
      });
  }, []);

  const getDescricao = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 200) + `...`;
    }
    return desc;
  };

  return (
    <S.CardListContainer>
      {restaurantes.map((rest) => (
        <Card
          key={rest.id}
          description={getDescricao(rest.descricao)}
          img={rest.capa}
          rating={rest.avaliacao}
          tagDescription={rest.tipo}
          title={rest.titulo}
          destaque={rest.destacado}
          cardapio={rest.cardapio}
          id={rest.id}
        />
      ))}
    </S.CardListContainer>
  );
};
export default CardList;
