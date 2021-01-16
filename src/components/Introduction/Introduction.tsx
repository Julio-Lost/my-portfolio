import * as S from "./styles";
import intro from "../../assets/intro.png";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

export const Introduction = () => {
  const { state: darkMode } = useDarkModeContext();

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <Grid container>
        <Grid item md={6} lg={6}>
          <S.CustomDivText>
            <Typography
              style={{
                fontSize: 16,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
              }}
              color="inherit"
            >
              Olá, eu sou
            </Typography>
            <Typography
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: darkMode.darkMode ? Colors.White : Colors.Black,
                paddingLeft: 4,
              }}
              color="inherit"
            >
              Julio Cesar de Medeiros.
            </Typography>
            <Typography
              style={{
                fontSize: 16,
                color: darkMode.darkMode ? Colors.White : Colors.Black,
              }}
              color="inherit"
            >
              Desenvolvedor
            </Typography>
            <Link
              variant="subtitle1"
              href="https://www.linkedin.com/in/julio-cesar-de-medeiros/"
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 8, textTransform: "none" }}
              >
                <Typography
                  color="inherit"
                  style={{ marginRight: 4, fontSize: 11, fontWeight: "bold" }}
                >
                  In
                </Typography>
                <Typography color="inherit" style={{ fontSize: 15 }}>
                  Linkedin
                </Typography>
              </Button>
            </Link>
          </S.CustomDivText>
        </Grid>
        <Grid item md={6} lg={6}>
          <div>
            <S.CustomImg src={intro} alt="intro" />
          </div>
        </Grid>
      </Grid>
    </S.CustomDiv>
  );
};

export default Introduction;
