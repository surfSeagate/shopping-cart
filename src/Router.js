import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import Navigation from "./Navigation";

const Router = props => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
