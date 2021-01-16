import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";
import {
  BuscarEstadoDarkOuLight,
  salvarEstadoDarkOuLight,
} from "../../constants/functions";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import { DarkModeActions } from "../../context/types/darkMode.types";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Introduction from "../Introduction/Introduction";
import Knowledge from "../Knowledge/Knowledge";
import Projects from "../Projects/Projects";
import Toolbar from "../Toolbar/ToolBar";
import * as S from "./styles";

import { scroller, animateScroll, Element } from "react-scroll";

const App = () => {
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

  const handleScrollAbout = () => {
    scroller.scrollTo("About", { smooth: true });
  };

  const handleScrollProjects = () => {
    scroller.scrollTo("Projects", { smooth: true });
  };

  const handleScrollKnowLedge = () => {
    scroller.scrollTo("KnowLedge", { smooth: true });
  };

  const handleScrollFooter = () => {
    animateScroll.scrollToBottom();
  };

  return (
    <S.MainContainer>
      <Toolbar
        handleLightMode={handleLightMode}
        handleDarkMode={handleDarkMode}
        handleScrollAbout={handleScrollAbout}
        handleScrollProjects={handleScrollProjects}
        handleScrollKnowLedge={handleScrollKnowLedge}
        handleScrollFooter={handleScrollFooter}
      />
      <Paper>
        <Introduction />
        <Element name="About">
          <About />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="KnowLedge">
          <Knowledge />
        </Element>
        <Footer />
      </Paper>
    </S.MainContainer>
  );
};

export default App;
