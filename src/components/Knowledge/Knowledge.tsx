import * as S from "./styles";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { DiHtml5, DiJsBadge, DiCss3, DiReact, DiNodejs } from "react-icons/di";
import { SiDotNet, SiDocker, SiMicrosoftsqlserver } from "react-icons/si";

const expericencia = [
  {
    linguagem: "HTML",
    icone: DiHtml5,
    anosExperiencia: 3,
    cor: "#dd4b25",
  },
  {
    linguagem: "JavaScript",
    icone: DiJsBadge,
    anosExperiencia: 3,
    cor: "#f7e018",
  },
  {
    linguagem: "CSS",
    icone: DiCss3,
    anosExperiencia: 3,
    cor: "#254bdd",
  },
  {
    linguagem: "React \n React Native",
    icone: DiReact,
    anosExperiencia: 1,
    cor: "#5ed3f3",
  },
  {
    linguagem: "NodeJs",
    icone: DiNodejs,
    anosExperiencia: 1,
    cor: "#333333",
  },
  {
    linguagem: ".Net",
    icone: SiDotNet,
    anosExperiencia: 1,
    cor: "#512bd4",
  },
  {
    linguagem: "Docker",
    icone: SiDocker,
    anosExperiencia: 1,
    cor: "#2391e6",
  },
  {
    linguagem: "SQL",
    icone: SiMicrosoftsqlserver,
    anosExperiencia: 1,
    cor: "#a4191c",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 500,
    backgroundColor: Colors.White,
  },
});

export const Knowledge = () => {
  const classes = useStyles();
  const { state: darkMode } = useDarkModeContext();

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          justifySelf: "center",
          justifyItems: "center",
          alignSelf: "center",
          padding: 30,
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: Colors.White,
            padding: 8,
          }}
        >
          Conhecimentos
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          justifySelf: "center",
          justifyItems: "center",
          alignSelf: "center",
          padding: 30,
          flexDirection: "row",
        }}
      >
        {expericencia.map((item) => (
          <S.CustomCard
            darkMode={darkMode.darkMode}
            style={{ margin: 8, minHeight: 150, minWidth: 150 }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <item.icone
                style={{
                  fontSize: 40,
                }}
                color={item.cor}
              />
              <Typography
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: Colors.Black,
                  whiteSpace: "pre-line",
                }}
              >
                {item.linguagem}
              </Typography>
              {/* <Typography
                style={{
                  fontSize: 11,
                  color: Colors.Black,
                }}
                color="inherit"
                paragraph
              >
                {`${item.anosExperiencia} anos de experiência`}
              </Typography> */}
            </CardContent>
          </S.CustomCard>
        ))}
      </div>
    </S.CustomDiv>
  );
};

export default Knowledge;
