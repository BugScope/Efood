import { Link } from "react-router-dom";
import * as S from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  tipo?: "menu" | "perfil";
  to?: string;
};

const Button = ({ children, tipo, to }: ButtonProps) => {
  return (
    <S.Buttons tipoCSS={tipo}>
      <Link to={to as string}>{children}</Link>
    </S.Buttons>
  );
};

export default Button;
