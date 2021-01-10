import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { DarkModeProvider } from "./context/reducers/darkMode/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
