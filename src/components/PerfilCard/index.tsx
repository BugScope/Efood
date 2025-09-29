import Button from "../Button";
import * as S from "./styles";

export type CardProps = {
  img: string;
  title: string;
  rating?: number;
  description: string;
  onSelecionar?: () => void;
};

const PerfilCard = ({ description, img, title, onSelecionar }: CardProps) => {
  return (
    <>
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
          <div
            onClick={() => {
              onSelecionar?.();
            }}
          >
            <Button tipo="perfil">Mais Detalhes</Button>
          </div>
        </S.CardContainer>
      </S.Card>
    </>
  );
};

export default PerfilCard;
