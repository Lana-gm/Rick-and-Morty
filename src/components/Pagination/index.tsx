import { useCharacters } from "providers/Characters";
import * as S from "./Pagination.styles";

const Pagination = () => {
  const { previousPage, nextPage } = useCharacters();

  return (
    <S.Container>
      <button onClick={previousPage}>Back</button>
      <button onClick={nextPage}>Next</button>
    </S.Container>
  );
};

export default Pagination;
