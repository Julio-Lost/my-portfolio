import * as S from "./styles";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { VscGithub } from "react-icons/vsc";

export const Projects = () => {
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
        }}
      >
        <Typography
          style={{
            fontSize: 18,
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
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          justifySelf: "center",
          justifyItems: "center",
          alignSelf: "center",
          padding: 30,
        }}
      >
        <S.CustomCard
          darkMode={darkMode.darkMode}
          style={{ maxHeight: 500, maxWidth: 300 }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography
              style={{
                fontSize: 11,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
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
        </S.CustomCard>
      </div>
    </S.CustomDiv>
  );
};

export default Projects;
