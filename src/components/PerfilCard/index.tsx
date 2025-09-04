import Button from "../Button";
import * as S from "./styles";

type CardProps = {
  img: string;
  title: string;
  rating?: number;
  description: string;
};

const PerfilCard = ({ description, img, title }: CardProps) => {
  return (
    <S.Card>
      <S.CardBannerImg>
        <img src={img} alt="" />
      </S.CardBannerImg>
      <S.CardContainer>
        <S.CardInfo>
          <S.CardInfoHeader>
            <h2>{title}</h2>
          </S.CardInfoHeader>
          <p>{description}</p>
        </S.CardInfo>
        <Button tipo="perfil">Adiconar ao carrinho</Button>
      </S.CardContainer>
    </S.Card>
  );
};

export default PerfilCard;
