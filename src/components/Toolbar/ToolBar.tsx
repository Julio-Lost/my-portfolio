import * as S from "./styles";
import { Colors } from "../../constants";
import { useDarkModeContext } from "../../context/reducers/darkMode/darkModeContext";
import Lottie from "react-lottie";

import AppBar from "@material-ui/core/AppBar";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import LogoAnimation from "../../assets/logo.json";
import LogoDarkAnimation from "../../assets/logoDark.json";
interface IToolbarProps {
  handleLightMode: () => void;
  handleDarkMode: () => void;
  handleScrollAbout: () => void;
  handleScrollProjects: () => void;
  handleScrollKnowLedge: () => void;
  handleScrollFooter: () => void;
}

export const Toolbar = (props: IToolbarProps) => {
  const { state: darkMode } = useDarkModeContext();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: darkMode.darkMode ? LogoDarkAnimation : LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <AppBar position="fixed">
      <S.CustomToolbar darkMode={darkMode.darkMode}>
        <div>
          <Lottie
            options={defaultOptions}
            height={80}
            width={80}
            style={{ borderRadius: 50 }}
          />
        </div>
        <S.ContainerBotoes>
          <S.CustomToolbarText>
            <S.CustomTypography
              onClick={props.handleScrollAbout}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: darkMode.darkMode ? Colors.White : Colors.Black,
                cursor: "pointer",
              }}
              noWrap
            >
              Sobre
            </S.CustomTypography>
          </S.CustomToolbarText>
          <S.CustomToolbarText>
            <S.CustomTypography
              onClick={props.handleScrollProjects}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: darkMode.darkMode ? Colors.White : Colors.Black,
                cursor: "pointer",
              }}
              noWrap
            >
              Projetos
            </S.CustomTypography>
          </S.CustomToolbarText>
          <S.CustomToolbarText>
            <S.CustomTypography
              onClick={props.handleScrollKnowLedge}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: darkMode.darkMode ? Colors.White : Colors.Black,
                cursor: "pointer",
              }}
              noWrap
            >
              Conhecimentos
            </S.CustomTypography>
          </S.CustomToolbarText>
          <S.CustomToolbarText>
            <S.CustomTypography
              onClick={props.handleScrollFooter}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: darkMode.darkMode ? Colors.White : Colors.Black,
                cursor: "pointer",
              }}
              noWrap
            >
              Contatos
            </S.CustomTypography>
          </S.CustomToolbarText>
          <S.CustomToolbarText style={{ marginTop: 3 }}>
            {darkMode.darkMode ? (
              <IoMdMoon onClick={props.handleDarkMode} />
            ) : (
              <IoMdSunny onClick={props.handleLightMode} color={Colors.Black} />
            )}
          </S.CustomToolbarText>
        </S.ContainerBotoes>
      </S.CustomToolbar>
    </AppBar>
  );
};

export default Toolbar;
