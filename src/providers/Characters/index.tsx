import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "constants/endpoints";

type Characters = {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  id: number;
};

type CharactersProviderData = {
  characters: Characters[];
  filterCharacters: () => Characters[];
  setName: (value: string) => void;
  loading: boolean;
  previousPage: () => void;
  nextPage: () => void;
};

const CharactersContext = createContext<CharactersProviderData>(
  {} as CharactersProviderData
);

export const CharactersProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [count, setCount] = useState(0);

  const filterCharacters = () => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );

    return filteredCharacters;
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/character/?page=${page}`)
      .then((res) => {
        setCharacters(res.data.results);
        setCount(res.data.info.pages);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < count) {
      setPage(page + 1);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        filterCharacters,
        setName,
        loading,
        previousPage,
        nextPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
