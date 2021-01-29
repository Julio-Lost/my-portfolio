import AppBar from "@material-ui/core/AppBar";
import * as S from "./styles";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";

import Link from "@material-ui/core/Link";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";

export const Footer = () => {
  const { state: darkMode } = useDarkModeContext();

  return (
    <AppBar position="static">
      <S.CustomToolbar darkMode={darkMode.darkMode}>
        <S.CustomToolbarText>
          <Link href="https://github.com/Julio-Lost">
            <VscGithub
              style={{
                fontSize: 24,
                cursor: "pointer",
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href="https://github.com/Julio-Lost">
            <AiFillLinkedin
              style={{
                fontSize: 24,
                cursor: "pointer",
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href="https://www.instagram.com/juliolost/">
            <AiFillInstagram
              style={{
                fontSize: 24,
                cursor: "pointer",
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href="mailto:juliocesarmedeirosdev@gmail.com">
            <GrMail
              style={{
                fontSize: 24,
                cursor: "pointer",
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href="https://t.me/juliocesardemedeiros">
            <FaTelegram
              style={{
                fontSize: 24,
                cursor: "pointer",
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
      </S.CustomToolbar>
    </AppBar>
  );
};

export default Footer;
