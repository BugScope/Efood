import { useParams } from "react-router-dom";
import PerfilCardList from "../../components/PerfilCardList";
import PerfilMenu from "../../components/PerfilMenu";

const Perfil = () => {
  const { id } = useParams();

  return (
    <div>
      <PerfilMenu />
      <PerfilCardList idRestaurante={id as string} />
    </div>
  );
};

export default Perfil;
