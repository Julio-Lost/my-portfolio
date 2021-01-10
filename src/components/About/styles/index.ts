import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Background : Colors.NewWhite};
`;

export const CustomDivText = styled.div`
  display: grid;
  justify-content: center;
  padding: 30px;
`;

export const CustomImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin: 30px;

  @media (max-width: 514px) {
    width: 150px;
    height: 150px;
  }
`;
