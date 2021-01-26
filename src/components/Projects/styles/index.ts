import styled from "styled-components";
import { Colors } from "../../../constants";
import Card from "@material-ui/core/Card";

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.CurrentLine : Colors.White};
  padding-top: 12vh;
  height: 100vh;
`;

export const CustomCard = styled(Card)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Purple : Colors.NewWhite};
  max-width: 300;
  max-height: 500;
`;
