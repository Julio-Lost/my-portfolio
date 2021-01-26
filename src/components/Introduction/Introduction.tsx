import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import IntroAnimation from "../../assets/intro.json";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import * as S from "./styles";

export const Introduction = () => {
  const { state: darkMode } = useDarkModeContext();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: IntroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <Grid container>
        <S.ContainerText item md={6} lg={6}>
          <S.CustomDivText>
            <Typography
              style={{
                fontSize: 20,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
              }}
              color="inherit"
            >
              Olá, eu sou
            </Typography>
            <Typography
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: darkMode.darkMode ? Colors.White : Colors.Black,
              }}
              color="inherit"
            >
              Julio Cesar de Medeiros.
            </Typography>
            <Typography
              style={{
                fontSize: 20,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
              }}
              color="inherit"
            >
              Desenvolvedor Full Stack
            </Typography>
            <S.LinkLikedin
              variant="subtitle1"
              href="https://www.linkedin.com/in/julio-cesar-de-medeiros/"
            >
              <S.ButtonLinkedin variant="contained">
                <Typography
                  color="inherit"
                  style={{
                    marginRight: 4,
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#FFF",
                  }}
                >
                  In
                </Typography>
                <Typography
                  color="inherit"
                  style={{ fontSize: 15, color: "#FFF" }}
                >
                  Linkedin
                </Typography>
              </S.ButtonLinkedin>
            </S.LinkLikedin>
          </S.CustomDivText>
        </S.ContainerText>
        <S.AnimationContainer item md={6} lg={6}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </S.AnimationContainer>
      </Grid>
    </S.CustomDiv>
  );
};

export default Introduction;
