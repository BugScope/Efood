import * as S from "./styles";
import estrela from "../../assets/Images/estrela.svg";
import Button from "../Button";

type CardProps = {
  img: string;
  title: string;
  rating: number;
  description: string;
};

const Card = ({ description, img, rating, title }: CardProps) => {
  return (
    <S.Card>
      <S.CardBannerImg>
        <img src={img} alt="" />
        <S.CardBannerInfo>
          <span>primeiro</span>
          <span>Segundo</span>
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
        <Button>Saiba mais</Button>
      </S.CardContainer>
    </S.Card>
  );
};

export default Card;
