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
  const idade = anoAtual - 1994;

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <Grid container>
        <S.CustomDivText item md={5}>
          <S.CustomImg
            src={me}
            alt="me"
            darkMode={darkMode.darkMode}
            width={200}
            height={200}
          />
        </S.CustomDivText>
        <S.CustomDivAboutMe item md={7}>
          <Typography
            style={{
              fontSize: 32,
              color: darkMode.darkMode ? Colors.White : Colors.Black,
              fontWeight: "bold",
              marginBottom: 15,
            }}
            color="inherit"
          >
            Sobre mim
          </Typography>
          <S.CustomTextAboutMe
            style={{
              color: darkMode.darkMode ? Colors.White : Colors.Black,
            }}
            color="inherit"
            paragraph
          >
            Meu nome é Julio Cesar de Medeiros, tenho {idade} anos e moro
            atualmente na cidade de Vila Velha - ES. Estou cursando Análise e
            Desenvolvimento de Sistemas pela Universidade de Vila Velha,
            UVV/Vila Velha.
          </S.CustomTextAboutMe>
          <S.CustomTextAboutMe
            style={{
              color: darkMode.darkMode ? Colors.White : Colors.Black,
            }}
            color="inherit"
          >
            Eu sou um dev procurando resolver problemas do mundo real. Tenho
            paixão por aprender e compartilhar meu conhecimento com os outros.
          </S.CustomTextAboutMe>
        </S.CustomDivAboutMe>
      </Grid>
    </S.CustomDiv>
  );
};

export default About;
