import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as S from "./styles";
import { VscColorMode } from "react-icons/vsc";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    toolbarText: {
      position: "relative",
      cursor: "pointer",
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
  })
);

export const Toolbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute">
      <S.CustomToolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Julio Cesar de Medeiros
        </Typography>
        <div className={classes.toolbarText}>
          <Typography className={classes.title} variant="h6" noWrap>
            Sobre
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <Typography className={classes.title} variant="h6" noWrap>
            Projetos
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <Typography className={classes.title} variant="h6" noWrap>
            Conhecimentos
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <Typography className={classes.title} variant="h6" noWrap>
            Contatos
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <VscColorMode />
        </div>
      </S.CustomToolbar>
    </AppBar>
  );
};

export default Toolbar;
