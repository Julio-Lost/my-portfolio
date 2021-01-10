import { useState } from "react";
import * as S from "./styles";
import Toolbar from "../Toolbar/ToolBar";
import Introduction from "../Introduction/Introduction";
import About from "../About/About";
import Projects from "../Projects/Projects";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    marginBottom: theme.spacing(4),
  },
}));

const App = () => {
  const classes = useStyles();
  const [lightMode, SetLightMode] = useState<boolean>(false);

  const handleLightMode = () => {
    SetLightMode(true);
  };

  const handleDarkMode = () => {
    SetLightMode(false);
  };

  return (
    <S.MainContainer>
      <Toolbar
        lightMode={lightMode}
        handleLightMode={handleLightMode}
        handleDarkMode={handleDarkMode}
      />
      <Paper className={classes.mainFeaturedPost}>
        <Introduction />
        <About />
        <Projects />
      </Paper>
    </S.MainContainer>
  );
};

export default App;
