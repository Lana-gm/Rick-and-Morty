import * as S from "./NotFound.styles";
import FavoriteImage from "assets/image/FavoriteImage.svg";
import CharacterImage from "assets/image/CharacterImage.svg";

type NotFoundProps = {
  type: "favorite" | "character";
  title: string;
};

const NotFound = ({ type, title }: NotFoundProps) => (
  <S.Container>
    <h3>{title}</h3>

    <S.Image
      src={type === "favorite" ? FavoriteImage : CharacterImage}
      alt="Not Found"
    />
  </S.Container>
);

export default NotFound;
