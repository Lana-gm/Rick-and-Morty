import NotFound from "components/NotFound";
import { useCharacters } from "providers/Characters";
import { useFavorite } from "providers/Favorites";
import Pagination from "components/Pagination";

import * as S from "./CharactersList.styles";

type Character = {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  id: number;
};

const CharactersList = () => {
  const { filterCharacters } = useCharacters();
  const characters = filterCharacters();
  const { favorites, addToFavorite, removeFromFavorite } = useFavorite();

  const handleFavorite = (character: Character) => {
    const favoriteFilter = favorites.filter(
      (favorite) => character.id === favorite.id
    );

    return favoriteFilter.length === 0 ? true : false;
  };

  return characters.length > 0 ? (
    <>
      <S.List>
        {characters.map((character, index) => (
          <li key={index}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <button
              onClick={() =>
                handleFavorite(character)
                  ? addToFavorite(character)
                  : removeFromFavorite(character)
              }
            >
              <S.Icon favoriteactive={handleFavorite(character).toString()} />
            </button>
          </li>
        ))}
      </S.List>
      <Pagination />
    </>
  ) : (
    <S.Container>
      <NotFound title="Personagem não encontrado" type="character" />
    </S.Container>
  );
};

export default CharactersList;
