import styled, { keyframes } from "styled-components";
import { Colors } from "../../../constants";
import Card from "@material-ui/core/Card";

const rotateCenter = keyframes`
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
`;

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Selection : Colors.White};
  padding-top: 12vh;
  height: auto;
  padding-bottom: 24px;
  > p {
    cursor: pointer;
  }
`;

export const CustomCard = styled(Card)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.White : Colors.Foreground};

  &:hover {
    cursor: pointer;
    animation: ${rotateCenter} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

export const CustomDivCard = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 514px) {
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;
