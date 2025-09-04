import { Link } from "react-router-dom";
import * as S from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  tipo?: "menu" | "perfil";
};

const Button = ({ children, tipo }: ButtonProps) => {
  return (
    <S.Buttons tipoCSS={tipo}>
      <Link to={"/perfil"}>{children}</Link>
    </S.Buttons>
  );
};

export default Button;
