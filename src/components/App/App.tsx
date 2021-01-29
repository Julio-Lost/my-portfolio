import Paper from "@material-ui/core/Paper";
import React from "react";
import { useEffect, useRef, Suspense } from "react";
import {
  BuscarEstadoDarkOuLight,
  salvarEstadoDarkOuLight,
} from "../../constants/functions";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import { DarkModeActions } from "../../context/types/darkMode.types";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as S from "./styles";

const About = React.lazy(() => import("../About/About"));
const Footer = React.lazy(() => import("../Footer/Footer"));
const Introduction = React.lazy(() => import("../Introduction/Introduction"));
const Knowledge = React.lazy(() => import("../Knowledge/Knowledge"));
const Projects = React.lazy(() => import("../Projects/Projects"));
const Toolbar = React.lazy(() => import("../Toolbar/ToolBar"));

const App = () => {
  const { dispatch, actions } = useDarkModeContext();
  const introductionRef = useRef<HTMLDivElement | null>(null);
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

  const handleScrollToIntroductionRef = () => {
    introductionRef.current!.scrollIntoView();
  };

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
      <Suspense fallback={<LinearProgress style={{ width: "100%" }} />}>
        <Toolbar
          handleLightMode={handleLightMode}
          handleDarkMode={handleDarkMode}
          handleScrollIntroduction={handleScrollToIntroductionRef}
          handleScrollAbout={handleScrollToAbouRef}
          handleScrollProjects={handleScrollToProjectsRef}
          handleScrollKnowLedge={handleScrollToKnowLedgeRef}
          handleScrollFooter={handleScrollToFooterRef}
        />
        <Paper>
          <div ref={introductionRef}>
            <Introduction />
          </div>
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
      </Suspense>
    </S.MainContainer>
  );
};

export default App;
