import styled from "styled-components";
import { Colors } from "../../../constants";
import Card from "@material-ui/core/Card";

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Selection : Colors.White};
`;

export const CustomCard = styled(Card)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.White : Colors.Foreground};
`;
