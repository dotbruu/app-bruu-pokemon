import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default Routes;
