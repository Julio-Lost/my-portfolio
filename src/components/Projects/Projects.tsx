import * as S from "./styles";
import { Colors } from "../../constants";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { VscGithub } from "react-icons/vsc";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 500,
    backgroundColor: Colors.Purple,
  },
});

export const Projects = () => {
  const classes = useStyles();
  return (
    <S.CustomDiv
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        justifySelf: "center",
        justifyItems: "center",
        alignSelf: "center",
        padding: 30,
      }}
    >
      <Card className={classes.root}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.White,
            }}
          >
            Projetos
          </Typography>
          <Typography
            style={{ fontSize: 11, color: Colors.White }}
            color="inherit"
            paragraph
          >
            Acesse o meu repositorio para ver os projetos realizados por mim :)
          </Typography>
          <CardContent
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              justifySelf: "center",
              justifyItems: "center",
              alignSelf: "center",
            }}
          >
            <Link href="https://github.com/Julio-Lost">
              <VscGithub
                style={{
                  fontSize: 40,
                  cursor: "pointer",
                }}
                color={Colors.NewPurple}
              />
            </Link>
          </CardContent>
        </CardContent>
      </Card>
    </S.CustomDiv>
  );
};

export default Projects;
