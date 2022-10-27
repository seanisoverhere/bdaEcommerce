import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Divider } from "antd";

export const Container = styled.div`
  background-color: ${colors.BACKGROUND.BROWN_1};
  height: 100vh;
  position: relative;
  overflow: auto;
`;

export const HeroContainer = styled.div`
  background: url("/banner.jpg") top left no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const HeroText = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  color: ${colors.TEXT.WHITE};
  font-size: 9rem;
  font-weight: 600;
`;

export const StyledDivider = styled(Divider)`
  && {
    border-color: ${colors.TEXT.WHITE};
    color: ${colors.TEXT.WHITE};
    width: 100%;
    font-size: 5rem;
    position: absolute;
  }
`;
