import * as S from "./styles";
import estrela from "../../assets/Images/estrela.svg";
import Button from "../Button";
import Tag from "../Tag";

export type CardapioModal = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

type CardProps = {
  id: number;
  img: string;
  title: string;
  rating: number;
  description: string;
  tagDescription: string;
  destaque?: boolean;
  cardapio: CardapioModal;
};

const Card = ({ description, img, rating, title, tagDescription, destaque, id }: CardProps) => {
  return (
    <S.Card>
      <S.CardBannerImg>
        <img src={img} alt={img} />
        <S.CardBannerInfo>
          {destaque ? (
            <>
              <Tag>Destaque da Semana</Tag>
              <Tag>{tagDescription}</Tag>
            </>
          ) : (
            <>
              <Tag>{tagDescription}</Tag>
            </>
          )}
        </S.CardBannerInfo>
      </S.CardBannerImg>
      <S.CardContainer>
        <S.CardInfo>
          <S.CardInfoHeader>
            <h2>{title}</h2>
            <div>
              <p>{rating}</p>
              <i>
                <img src={estrela} alt="" />
              </i>
            </div>
          </S.CardInfoHeader>
          <p>{description}</p>
        </S.CardInfo>
        <Button to={`/restaurantes/${id}`}>Saiba mais</Button>
      </S.CardContainer>
    </S.Card>
  );
};

export default Card;
