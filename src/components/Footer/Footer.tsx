import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as S from "./styles";
import { Colors } from "../../constants";
import Link from "@material-ui/core/Link";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";

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

export const Footer = () => {
  const classes = useStyles();
  const { state: darkMode } = useDarkModeContext();

  return (
    <AppBar position="static">
      <S.CustomToolbar
        darkMode={darkMode.darkMode}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div className={classes.toolbarText}>
          <Link href="https://github.com/Julio-Lost">
            <VscGithub
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
              color={Colors.NewPurple}
            />
          </Link>
        </div>
        <div className={classes.toolbarText}>
          <Link href="https://github.com/Julio-Lost">
            <AiFillLinkedin
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
              color={Colors.NewPurple}
            />
          </Link>
        </div>
        <div className={classes.toolbarText}>
          <Link href="https://www.instagram.com/juliolost/">
            <AiFillInstagram
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
              color={Colors.NewPurple}
            />
          </Link>
        </div>
        <div className={classes.toolbarText}>
          <Link href="mailto:juliocesarmedeirosdev@gmail.com">
            <GrMail
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
              color={Colors.NewPurple}
            />
          </Link>
        </div>
        <div className={classes.toolbarText}>
          <Link href="https://t.me/juliocesardemedeiros">
            <FaTelegram
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
              color={Colors.NewPurple}
            />
          </Link>
        </div>
      </S.CustomToolbar>
    </AppBar>
  );
};

export default Footer;
