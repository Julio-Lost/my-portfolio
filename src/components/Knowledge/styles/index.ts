import styled, { keyframes } from "styled-components";
import { Colors } from "../../../constants";
import Card from "@material-ui/core/Card";

const rotateCenter = keyframes`
from {transform: rotate(0)
}
to{
  transform:rotate(360deg)
  }
`;

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Selection : Colors.White};
`;

export const CustomCard = styled(Card)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.White : Colors.Foreground};

  &:hover {
    background-color: ${Colors.Comment};
    animation: ${rotateCenter} 2s ease-in-out both;
  }
`;

export const CustomDivCard = styled.div`
  display: flex;
  padding: 30;
  flex-direction: row;

  @media (max-width: 514px) {
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;
