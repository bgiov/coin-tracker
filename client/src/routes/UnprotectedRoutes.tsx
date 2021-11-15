import { Switch, Route } from "react-router-dom";
import { Home } from "../views/Home";

export const UnprotectedRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
