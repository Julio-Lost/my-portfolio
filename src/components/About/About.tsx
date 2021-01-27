import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import me from "../../assets/me.jpg";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import * as S from "./styles";

export const About = () => {
  const { state: darkMode } = useDarkModeContext();
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - 1997;

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <Grid container>
        <S.CustomDivText item md={5}>
          <S.CustomImg src={me} alt="me" darkMode={darkMode.darkMode} />
        </S.CustomDivText>
        <S.CustomDivAboutMe item md={7}>
          <Typography
            style={{
              fontSize: 32,
              color: darkMode.darkMode ? Colors.White : "#2d4159",
              fontWeight: "bold",
              marginBottom: 15,
            }}
            color="inherit"
          >
            Sobre mim
          </Typography>
          <Typography
            style={{
              fontSize: 18,
              color: darkMode.darkMode ? Colors.White : Colors.Black,
            }}
            color="inherit"
            paragraph
          >
            Meu nome é Julio Cesar de Medeiros, tenho {idade} anos e moro
            atualmente na cidade de Vila Velha - ES. Estou cursando Análise e
            Desenvolvimento de Sistemas pela Universidade de Vila Velha,
            UVV/Vila Velha.
          </Typography>
          <Typography
            style={{
              fontSize: 18,
              color: darkMode.darkMode ? Colors.White : Colors.Black,
            }}
            color="inherit"
          >
            Eu sou um dev procurando resolver problemas do mundo real. Tenho
            paixão por aprender e compartilhar meu conhecimento com os outros.
          </Typography>
        </S.CustomDivAboutMe>
      </Grid>
    </S.CustomDiv>
  );
};

export default About;
