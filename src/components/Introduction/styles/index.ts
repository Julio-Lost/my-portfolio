import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.NewPurple : Colors.White};
`;

export const CustomImg = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 514px) {
    width: 259px;
    height: 250px;
  }
`;

export const CustomDivText = styled.div`
  display: grid;
  justify-content: center;
  padding: 30px;
`;
