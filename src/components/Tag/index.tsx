import * as S from "./styles";

type TagProps = {
  children?: React.ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return <S.TagContainer>{children}</S.TagContainer>;
};

export default Tag;
