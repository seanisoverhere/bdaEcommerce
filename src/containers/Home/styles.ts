import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Divider } from "antd";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  overflow: auto;
`;

export const HeroContainer = styled.div`
  background: url("/banner.jpg") top left no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const HeroText = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  color: ${colors.TEXT.WHITE};
  font-size: 11rem;
  font-weight: 600;
  z-index: 2;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
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

export const BrandText = styled.div`
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

export const MainContainer = styled.div`
  background-color: ${colors.BACKGROUND.BROWN_2};
  position: relative;
  padding: 2rem 4rem;
`;

export const RecommendationText = styled(motion.div)`
  font-size: 7rem;
  font-weight: 600;
  text-align: right;
  margin-bottom: 1rem;
`;

export const StyledImgBig = styled.img`
  width: 100%;
`;

export const StyledImgSmall = styled.img`
  width: 40%;
`;

export const ImageText = styled.span`
  font-family: monospace, monospace;
  font-weight: 600;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;