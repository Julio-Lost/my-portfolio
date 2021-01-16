import Paper from "@material-ui/core/Paper";
import { useEffect, useRef } from "react";
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

const App = () => {
  const { dispatch, actions } = useDarkModeContext();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const knowledgeRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

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

  const handleScrollToAbouRef = () => {
    aboutRef.current!.scrollIntoView();
  };

  const handleScrollToProjectsRef = () => {
    projectsRef.current!.scrollIntoView();
  };

  const handleScrollToKnowLedgeRef = () => {
    knowledgeRef.current!.scrollIntoView();
  };

  const handleScrollToFooterRef = () => {
    footerRef.current!.scrollIntoView();
  };

  return (
    <S.MainContainer>
      <Toolbar
        handleLightMode={handleLightMode}
        handleDarkMode={handleDarkMode}
        handleScrollAbout={handleScrollToAbouRef}
        handleScrollProjects={handleScrollToProjectsRef}
        handleScrollKnowLedge={handleScrollToKnowLedgeRef}
        handleScrollFooter={handleScrollToFooterRef}
      />
      <Paper>
        <Introduction />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={knowledgeRef}>
          <Knowledge />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </Paper>
    </S.MainContainer>
  );
};

export default App;
