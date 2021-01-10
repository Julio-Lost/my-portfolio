import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.NewPurple : Colors.White};
`;
