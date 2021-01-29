import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./components/App/styles";
import { DarkModeProvider } from "./context/reducers/darkMode/darkModeContext";
import LinearProgress from "@material-ui/core/LinearProgress";
const App = React.lazy(() => import("./components/App/App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LinearProgress style={{ width: "100%" }} />}>
      <DarkModeProvider>
        <App />
        <GlobalStyle />
      </DarkModeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
