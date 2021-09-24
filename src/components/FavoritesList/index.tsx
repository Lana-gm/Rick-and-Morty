import NotFound from "components/NotFound";
import { useFavorite } from "providers/Favorites";
import * as S from "./FavoritesList.styles";

const FavoritesList = () => {
  const { favorites, removeFromFavorite } = useFavorite();

  return favorites.length > 0 ? (
    <S.List>
      {favorites.map((favorite, index) => (
        <li key={index}>
          <img src={favorite.image} alt={favorite.name} />
          <p>{favorite.name}</p>
          <p>{favorite.gender}</p>
          <S.Button onClick={() => removeFromFavorite(favorite)}>
            Remove
          </S.Button>
        </li>
      ))}
    </S.List>
  ) : (
    <S.Container>
      <NotFound title="Lista de Favoritos Vazia" type="favorite" />
    </S.Container>
  );
};

export default FavoritesList;
