import { useCharacters } from "providers/Characters";
import { useState } from "react";
import * as S from "./SearchBar.styles";

const SearchBar = () => {
  const { setName } = useCharacters();

  const [value, setValue] = useState<string>("");

  return (
    <div>
      <S.Input
        placeholder="Search the character here"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <S.Button onClick={() => setName(value)}>Search</S.Button>
    </div>
  );
};

export default SearchBar;
