import { CharactersProvider } from "providers/Characters";
import { FavoritesProvider } from "providers/Favorites";

type CharactersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: CharactersProps) => (
  <CharactersProvider>
    <FavoritesProvider>{children}</FavoritesProvider>
  </CharactersProvider>
);

export default Providers;
