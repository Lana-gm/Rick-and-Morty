import Home from "pages/Home";
import FavoritesList from "components/FavoritesList";
import Menu from "components/Menu";

import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={FavoritesList} />
    </Switch>
  </>
);

export default Routes;
