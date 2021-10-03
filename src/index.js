import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
