import styled from "styled-components";
import colors from "@/utils/constants/colors";
import { Row } from "antd";

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

export const StyledRow = styled(Row)`
  && {
    width: 100%;
  }
`;
