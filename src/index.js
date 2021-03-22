import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureFakeBackend } from "./utils/fake-backend";
import { store } from "./redux/store";
import { Provider } from "react-redux";
configureFakeBackend();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
