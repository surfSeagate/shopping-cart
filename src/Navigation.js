import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
