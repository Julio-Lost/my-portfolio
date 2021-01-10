import * as S from "./styles";
import me from "../../assets/me.jpg";
import { Colors } from "../../constants";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  overlay: {
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    // backgroundColor: "rgba(0,0,0,.3)",
  },
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
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export const About = () => {
  const classes = useStyles();

  return (
    <S.CustomDiv>
      <div />
      <Grid container>
        <Grid item md={6}>
          <div>
            <img
              src={me}
              width="150"
              height="150"
              alt="me"
              style={{ borderRadius: 150, margin: 30 }}
            />
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              style={{ fontSize: 16, color: Colors.White, fontWeight: "bold" }}
              color="inherit"
            >
              Sobre mim
            </Typography>
            <Typography
              style={{
                fontSize: 11,
                color: Colors.White,
              }}
              color="inherit"
              paragraph
            >
              Meu nome é Julio Cesar de Medeiros, tenho 26 anos e moro
              atualmente na cidade de Vila Velha - ES. Sou graduando em Análise
              e Desenvolvimento de Sistemas pela Universidade de Vila Velha,
              UVV/Vila Velha.
            </Typography>
            <Typography
              style={{ fontSize: 11, color: Colors.White }}
              color="inherit"
            >
              Eu sou um dev procurando resolver problemas do mundo real. Tenho
              paixão por aprender e compartilhar meu conhecimento com os outros.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </S.CustomDiv>
  );
};

export default About;