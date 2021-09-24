import * as S from "./Menu.styles";
import SearchBar from "components/SearchBar";

const Menu = () => (
  <S.Menu>
    <S.Container>
      <S.Box>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/favorites">Favorites</S.Link>
      </S.Box>
      <SearchBar />
    </S.Container>
  </S.Menu>
);

export default Menu;
