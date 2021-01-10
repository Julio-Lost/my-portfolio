import * as S from "./styles";
import Toolbar from "../Toolbar/ToolBar";
import Introduction from "../Introduction/Introduction";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Knowledge from "../Knowledge/Knowledge";
import Footer from "../Footer/Footer";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import { DarkModeActions } from "../../context/types/darkMode.types";
import {
  BuscarEstadoDarkOuLight,
  salvarEstadoDarkOuLight,
} from "../../constants/functions";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    marginBottom: theme.spacing(4),
  },
}));

const App = () => {
  const classes = useStyles();
  const { dispatch, actions } = useDarkModeContext();

  const handleLightMode = () => {
    salvarEstadoDarkOuLight(true);
    dispatch({ type: actions.DARK_MODE, payload: true });
  };

  const handleDarkMode = () => {
    salvarEstadoDarkOuLight(false);
    dispatch({ type: DarkModeActions.LIGHT_MODE });
  };

  useEffect(() => {
    const darkMode = BuscarEstadoDarkOuLight();

    if (darkMode) {
      dispatch({ type: actions.DARK_MODE, payload: true });
    } else {
      dispatch({ type: DarkModeActions.LIGHT_MODE });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.MainContainer>
      <Toolbar
        handleLightMode={handleLightMode}
        handleDarkMode={handleDarkMode}
      />
      <Paper className={classes.mainFeaturedPost}>
        <Introduction />
        <About />
        <Projects />
        <Knowledge />
        <Footer />
      </Paper>
    </S.MainContainer>
  );
};

export default App;
