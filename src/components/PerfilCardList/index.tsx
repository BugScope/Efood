import PerfilCard from "../PerfilCard";
import pizza from "../../assets/Images/pizza.png";
import * as S from "./styles";

const PerfilCardList = () => {
  return (
    <div>
      <S.PerfilCardListImg>
        <div>
          <p className="pequeno">Italiana</p>
          <p className="grande">La Dolce Vita Trattoria</p>
        </div>
      </S.PerfilCardListImg>
      <S.PerfilCardListContainer>
        <PerfilCard
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco
            e um toque de azeite. Sabor e simplicidade!"
          title="Pizza Marguerita"
          img={pizza}
        />
        <PerfilCard
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco
            e um toque de azeite. Sabor e simplicidade!"
          title="Pizza Marguerita"
          img={pizza}
        />
        <PerfilCard
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco
            e um toque de azeite. Sabor e simplicidade!"
          title="Pizza Marguerita"
          img={pizza}
        />
        <PerfilCard
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco
            e um toque de azeite. Sabor e simplicidade!"
          title="Pizza Marguerita"
          img={pizza}
        />
        <PerfilCard
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco
            e um toque de azeite. Sabor e simplicidade!"
          title="Pizza Marguerita"
          img={pizza}
        />
        <PerfilCard
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco
            e um toque de azeite. Sabor e simplicidade!"
          title="Pizza Marguerita"
          img={pizza}
        />
      </S.PerfilCardListContainer>
    </div>
  );
};

export default PerfilCardList;
