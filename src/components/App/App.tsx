import * as S from "./styles";
import Toolbar from "../Toolbar/ToolBar";
import Introduction from "../Introduction/Introduction";
import About from "../About/About";

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

  return (
    <S.MainContainer>
      <Toolbar />
      <Paper className={classes.mainFeaturedPost}>
        <Introduction />
        <About />
      </Paper>
    </S.MainContainer>
  );
};

export default App;
