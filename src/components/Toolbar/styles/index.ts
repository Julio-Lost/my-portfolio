import { Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Colors } from "../../../constants";

export const CustomToolbar = styled(Toolbar)<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? Colors.Background : Colors.White};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  height: 12vh;
  display: flex;
  justify-content: space-between;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CustomTypography = styled(Typography)`
  flex-grow: 1;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

export const CustomToolbarText = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 0px;
  width: 100%;

  @media (min-width: 600px) {
    margin-left: 12px;
    width: auto;
  }
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
`;
