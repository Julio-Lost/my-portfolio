import { Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomToolbar = styled(Toolbar)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Background : Colors.White};
  /* width: 100%; */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`;
