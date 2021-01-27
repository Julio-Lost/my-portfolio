import { Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomToolbar = styled(Toolbar)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Background : "#56dafe"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 550px) {
    justify-content: space-around;
  }
`;

export const CustomToolbarText = styled.div`
  padding: 0px 12px;
`;
