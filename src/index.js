import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./config/store";

const app = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
