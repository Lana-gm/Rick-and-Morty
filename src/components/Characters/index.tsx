import ReactLoading from "react-loading";
import { useCharacters } from "providers/Characters";
import CharactersList from "components/CharactersList";
import * as S from "./Characters.styles";
import colors from "styles/theme/colors";

const Characters = () => {
  const { loading } = useCharacters();

  return loading ? (
    <S.Container>
      <ReactLoading type="spin" color={colors.gray.secondary} />
    </S.Container>
  ) : (
    <CharactersList />
  );
};

export default Characters;
