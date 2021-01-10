import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as S from "./styles";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

interface IToolbarProps {
  handleLightMode: () => void;
  handleDarkMode: () => void;
}

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

export const Toolbar = (props: IToolbarProps) => {
  const classes = useStyles();
  const { state: darkMode } = useDarkModeContext();

  return (
    <AppBar position="static">
      <S.CustomToolbar darkMode={darkMode.darkMode}>
        <Typography
          className={classes.title}
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: darkMode.darkMode ? Colors.White : Colors.Black,
            cursor: "pointer",
          }}
          noWrap
        >
          Julio Cesar de Medeiros
        </Typography>
        <div className={classes.toolbarText}>
          <Typography
            className={classes.title}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: darkMode.darkMode ? Colors.White : Colors.Black,
              cursor: "pointer",
            }}
            noWrap
          >
            Sobre
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <Typography
            className={classes.title}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: darkMode.darkMode ? Colors.White : Colors.Black,
              cursor: "pointer",
            }}
            noWrap
          >
            Projetos
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <Typography
            className={classes.title}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: darkMode.darkMode ? Colors.White : Colors.Black,
              cursor: "pointer",
            }}
            noWrap
          >
            Conhecimentos
          </Typography>
        </div>
        <div className={classes.toolbarText}>
          <Typography
            className={classes.title}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: darkMode.darkMode ? Colors.White : Colors.Black,
              cursor: "pointer",
            }}
            noWrap
          >
            Contatos
          </Typography>
        </div>
        <div className={classes.toolbarText} style={{ marginTop: 3 }}>
          {darkMode.darkMode ? (
            <IoMdMoon onClick={props.handleDarkMode} />
          ) : (
            <IoMdSunny onClick={props.handleLightMode} color={Colors.Black} />
          )}
        </div>
      </S.CustomToolbar>
    </AppBar>
  );
};

export default Toolbar;
