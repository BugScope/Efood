import Card from "../../components/Card";
import { useGetRestaurantesQuery } from "../../services/api";
import * as S from "./styles";

export type ItemCardapio = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type RstaurantesModal = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: ItemCardapio[];
};

const CardList = () => {
  const { data: restaurantes } = useGetRestaurantesQuery();

  const getDescricao = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 200) + `...`;
    }
    return desc;
  };

  if (!restaurantes) {
    return <div>Carregando...</div>;
  }

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
          id={rest.id}
        />
      ))}
    </S.CardListContainer>
  );
};
export default CardList;
