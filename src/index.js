import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureFakeBackend } from "./utils/fake-backend";

configureFakeBackend();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
