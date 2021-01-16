import { Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomToolbar = styled(Toolbar)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Background : Colors.White};
`;

export const CustomToolbarText = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 0px;
  width: 100%;

  @media (min-width: 600px) {
    margin-left: 8px;
    width: auto;
  }
`;
