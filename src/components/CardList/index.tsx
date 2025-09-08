import Card from "../../components/Card";
import rest1 from "../../assets/Images/restaurante1.png";
import rest2 from "../../assets/Images/restaurante2.png";
import * as S from "./styles";

const CardList = () => {
  return (
    <S.CardListContainer>
      <Card
        destaque={true}
        tagDescription="Japonesa"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        img={rest1}
        rating={4.9}
        title="Hioki Sushi "
      />
      <Card
        tagDescription="Italiana"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        img={rest2}
        rating={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        tagDescription="Italiana"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        img={rest2}
        rating={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        tagDescription="Italiana"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        img={rest2}
        rating={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        tagDescription="Italiana"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        img={rest2}
        rating={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        tagDescription="Italiana"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        img={rest2}
        rating={4.6}
        title="La Dolce Vita Trattoria"
      />
    </S.CardListContainer>
  );
};
export default CardList;
