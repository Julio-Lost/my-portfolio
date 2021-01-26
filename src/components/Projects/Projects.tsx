import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Lottie from "react-lottie";
import GithubAnimation from "../../assets/github.json";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import * as S from "./styles";

export const Projects = () => {
  const { state: darkMode } = useDarkModeContext();

  const navigate = () =>
    (window.location.href = "https://github.com/vbbarbosa97");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GithubAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Typography
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: darkMode.darkMode ? Colors.White : Colors.Black,
            padding: 8,
          }}
        >
          Projetos
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <S.CustomCard
          darkMode={darkMode.darkMode}
          style={{
            maxHeight: 300,
            maxWidth: 400,
            cursor: "pointer",
            paddingTop: 30,
          }}
          elevation={10}
          onClick={navigate}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography
              style={{
                fontSize: 16,
                color: Colors.Black,
                fontWeight: 700,
              }}
              color="inherit"
              paragraph
            >
              Acesse o meu repositorio para ver os projetos realizados por mim
              :)
            </Typography>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Lottie options={defaultOptions} height={200} width={200} />
            </CardContent>
          </CardContent>
        </S.CustomCard>
      </div>
    </S.CustomDiv>
  );
};

export default Projects;
