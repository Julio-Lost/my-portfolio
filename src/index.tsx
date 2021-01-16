import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { GlobalStyle } from "./components/App/styles";
import { DarkModeProvider } from "./context/reducers/darkMode/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
      <GlobalStyle />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
