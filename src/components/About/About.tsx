import * as S from "./styles";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

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
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {mainFeaturedPost.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {mainFeaturedPost.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {mainFeaturedPost.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </S.CustomDiv>
  );
};

export default About;
