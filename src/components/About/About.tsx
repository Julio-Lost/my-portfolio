import * as S from "./styles";
import me from "../../assets/me.jpg";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const About = () => {
  const { state: darkMode } = useDarkModeContext();
  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <div />
      <Grid container>
        <Grid item md={5}>
          <S.CustomDivText>
            <S.CustomImg src={me} alt="me" />
          </S.CustomDivText>
        </Grid>
        <Grid item md={7}>
          <S.CustomDivAboutMe>
            <Typography
              style={{
                fontSize: 16,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
                fontWeight: "bold",
              }}
              color="inherit"
            >
              Sobre mim
            </Typography>
            <Typography
              style={{
                fontSize: 11,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
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
              style={{
                fontSize: 11,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
              }}
              color="inherit"
            >
              Eu sou um dev procurando resolver problemas do mundo real. Tenho
              paixão por aprender e compartilhar meu conhecimento com os outros.
            </Typography>
          </S.CustomDivAboutMe>
        </Grid>
      </Grid>
    </S.CustomDiv>
  );
};

export default About;
