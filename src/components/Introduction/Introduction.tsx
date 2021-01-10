import * as S from "./styles";
import intro from "../../assets/intro.png";
import { Colors } from "../../constants";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description: "Olá, eu sou Julio Cesar de Medeiros.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export const Introduction = () => {
  const classes = useStyles();

  return (
    <S.CustomDiv>
      <div />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              style={{ fontSize: 16, color: Colors.White }}
              color="inherit"
            >
              Olá, eu sou
            </Typography>
            <Typography
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Colors.White,
                paddingLeft: 4,
              }}
              color="inherit"
            >
              Julio Cesar de Medeiros.
            </Typography>
            <Typography
              style={{ fontSize: 16, color: Colors.White }}
              color="inherit"
            >
              Desenvolvedor
            </Typography>
            <Link
              variant="subtitle1"
              href="https://www.linkedin.com/in/julio-cesar-de-medeiros/"
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 8, textTransform: "none" }}
              >
                <Typography
                  color="inherit"
                  style={{ marginRight: 4, fontSize: 11, fontWeight: "bold" }}
                >
                  In
                </Typography>
                <Typography color="inherit" style={{ fontSize: 15 }}>
                  Linkedin
                </Typography>
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item md={6}>
          <div>
            <img src={intro} width="300" height="300" alt="intro" />
          </div>
        </Grid>
      </Grid>
    </S.CustomDiv>
  );
};

export default Introduction;
