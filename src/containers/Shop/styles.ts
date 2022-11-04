import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Col, Row } from "antd";
import { motion } from "framer-motion";

export const ShopContainer = styled.div`
  margin: 9rem 5rem 2rem;
`;

export const ShopTitle = styled.div`
  font-weight: 600;
  font-size: 3rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 1rem;
`;

export const CategoryText = styled.div<{ $isActive?: boolean }>`
  font-weight: 600;
  font-size: 8rem;
  padding-right: 4rem;
  color: ${({ $isActive }) =>
    $isActive ? colors.TEXT.BLACK : colors.BACKGROUND.GREY_2};
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
`;

export const StyledRow = styled(motion(Row))`
  && {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const MotionCol = styled(motion(Col))``;

export const ImageContainer = styled.div<{ $backgroundUrl: string }>`
  background: url(${({ $backgroundUrl }) => $backgroundUrl}) center center
    no-repeat;
  background-size: cover;
  background-color: ${colors.BACKGROUND.GREY_1};
  min-height: 600px;
  max-height: 600px;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonospaceText = styled.div`
  font-family: monospace;
  padding: 0.4rem 0;
  font-size: 1.1rem;
`;

export const Price = styled(MonospaceText)`
  color: ${colors.TEXT.GREY_3};
`;
