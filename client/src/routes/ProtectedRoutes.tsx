import * as React from "react";
import { Switch } from "react-router-dom";
import { MiniDrawer } from "../navigation/MiniDrawer";
import { Dashboard } from "../views/Dashboard";
import { Deposits } from "../views/Deposits";
import { Portfolio } from "../views/Portfolio";
import { ProtectedRoute } from "./ProtectedRoute";

export const ProtectedRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute
        path={"/dashboard"}
        component={Dashboard}
        layout={MiniDrawer}
      />
      <ProtectedRoute
        path={"/deposits"}
        component={Deposits}
        layout={MiniDrawer}
      />
      <ProtectedRoute
        path={"/portfolio"}
        component={Portfolio}
        layout={MiniDrawer}
      />
    </Switch>
  );
};
