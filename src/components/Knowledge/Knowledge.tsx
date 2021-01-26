import * as S from "./styles";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { DiHtml5, DiJsBadge, DiCss3, DiReact, DiNodejs } from "react-icons/di";
import {
  SiDotNet,
  SiDocker,
  SiMicrosoftsqlserver,
  SiTypescript,
} from "react-icons/si";
import {
  AjustarTextoDeExperiencia,
  IncrementarAnoDeExperiencia,
} from "../../constants/functions";

const expericencia1 = [
  {
    linguagem: "HTML",
    icone: DiHtml5,
    anosExperiencia: 2018,
    cor: "#dd4b25",
  },
  {
    linguagem: "JavaScript",
    icone: DiJsBadge,
    anosExperiencia: 2018,
    cor: "#f7e018",
  },
  {
    linguagem: "TypeScript",
    icone: SiTypescript,
    anosExperiencia: 2020,
    cor: "#2f74c0",
  },
];

const expericencia2 = [
  {
    linguagem: "CSS",
    icone: DiCss3,
    anosExperiencia: 2018,
    cor: "#254bdd",
  },
  {
    linguagem: "React \n React Native",
    icone: DiReact,
    anosExperiencia: 2020,
    cor: "#5ed3f3",
  },
  {
    linguagem: "NodeJs",
    icone: DiNodejs,
    anosExperiencia: 2020,
    cor: "#333333",
  },
];

const experiencia3 = [
  {
    linguagem: ".Net",
    icone: SiDotNet,
    anosExperiencia: 2020,
    cor: "#512bd4",
  },
  {
    linguagem: "Docker",
    icone: SiDocker,
    anosExperiencia: 2020,
    cor: "#2391e6",
  },
  {
    linguagem: "SQL",
    icone: SiMicrosoftsqlserver,
    anosExperiencia: 2020,
    cor: "#a4191c",
  },
];

export const Knowledge = () => {
  const { state: darkMode } = useDarkModeContext();

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 30,
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: darkMode.darkMode ? Colors.White : Colors.Black,
            padding: 8,
            fontFamily: "sans-serif",
          }}
        >
          Conhecimentos
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <S.CustomDivCard>
          {expericencia1.map((item, index) => (
            <S.CustomCard
              darkMode={darkMode.darkMode}
              style={{
                margin: 8,
                minHeight: 150,
                minWidth: 150,
                maxHeight: 150,
                backgroundColor: darkMode.darkMode
                  ? Colors.White
                  : Colors.NewWhite,
              }}
              key={index}
            >
              <CardContent style={{ textAlign: "center" }}>
                <item.icone
                  style={{
                    fontSize: 50,
                    paddingBottom: 6,
                  }}
                  color={item.cor}
                />
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: Colors.Black,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.linguagem}
                </Typography>
                <Typography
                  style={{
                    fontSize: 12,
                    color: Colors.Black,
                    fontFamily: "fantasy",
                  }}
                  color="inherit"
                >
                  {`${IncrementarAnoDeExperiencia(
                    item.anosExperiencia
                  )} ${AjustarTextoDeExperiencia(
                    item.anosExperiencia
                  )}  de experiência`}
                </Typography>
              </CardContent>
            </S.CustomCard>
          ))}
        </S.CustomDivCard>
        <S.CustomDivCard>
          {expericencia2.map((item, index) => (
            <S.CustomCard
              darkMode={darkMode.darkMode}
              style={{
                margin: 8,
                minHeight: 150,
                minWidth: 150,
                maxHeight: 150,
                backgroundColor: darkMode.darkMode
                  ? Colors.White
                  : Colors.NewWhite,
              }}
              key={index}
            >
              <CardContent style={{ textAlign: "center" }}>
                <item.icone
                  style={{
                    fontSize: 50,
                    paddingBottom: 6,
                  }}
                  color={item.cor}
                />
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: Colors.Black,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.linguagem}
                </Typography>
                <Typography
                  style={{
                    fontSize: 12,
                    color: Colors.Black,
                    fontFamily: "fantasy",
                  }}
                  color="inherit"
                >
                  {`${IncrementarAnoDeExperiencia(
                    item.anosExperiencia
                  )} ${AjustarTextoDeExperiencia(
                    item.anosExperiencia
                  )}  de experiência`}
                </Typography>
              </CardContent>
            </S.CustomCard>
          ))}
        </S.CustomDivCard>
        <S.CustomDivCard className="rotate-center">
          {experiencia3.map((item, index) => (
            <S.CustomCard
              darkMode={darkMode.darkMode}
              style={{
                margin: 8,
                minHeight: 150,
                minWidth: 150,
                maxHeight: 150,
                backgroundColor: darkMode.darkMode
                  ? Colors.White
                  : Colors.NewWhite,
              }}
              key={index}
            >
              <CardContent style={{ textAlign: "center" }}>
                <item.icone
                  style={{
                    fontSize: 50,
                    paddingBottom: 6,
                  }}
                  color={item.cor}
                />
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: Colors.Black,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.linguagem}
                </Typography>
                <Typography
                  style={{
                    fontSize: 12,
                    color: Colors.Black,
                    fontFamily: "fantasy",
                  }}
                  color="inherit"
                >
                  {`${IncrementarAnoDeExperiencia(
                    item.anosExperiencia
                  )} ${AjustarTextoDeExperiencia(
                    item.anosExperiencia
                  )}  de experiência`}
                </Typography>
              </CardContent>
            </S.CustomCard>
          ))}
        </S.CustomDivCard>
      </div>
    </S.CustomDiv>
  );
};

export default Knowledge;
