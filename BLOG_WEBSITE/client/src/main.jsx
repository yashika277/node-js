import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // react js render the two time the function that why here comment out
  //<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</React.StrictMode>
);
