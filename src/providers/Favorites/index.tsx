import { createContext, useContext, useState } from "react";

type Favorites = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
};

type FavoritesProviderData = {
  favorites: Favorites[];
  addToFavorite: (newFavorite: Favorites) => void;
  removeFromFavorite: (favoriteToDelete: Favorites) => void;
};

const FavoritesContext = createContext<FavoritesProviderData>(
  {} as FavoritesProviderData
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorites[]>([]);

  const addToFavorite = (newFavorite: Favorites) => {
    favorites.includes(newFavorite)
      ? setFavorites([...favorites])
      : setFavorites([...favorites, newFavorite]);
  };

  const removeFromFavorite = (favoriteToDelete: Favorites) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== favoriteToDelete.id
    );
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoritesContext);
