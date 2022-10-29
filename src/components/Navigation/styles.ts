import styled from "styled-components";
import colors from "@/utils/constants/colors";

export const StyledNav = styled.div<{ $headerShrinked: boolean }>`
  position: fixed;
  transition: 0.4s;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 5rem;
  align-items: start;
  background-color: ${({ $headerShrinked }) =>
    $headerShrinked ? colors.BACKGROUND.BROWN_3 : "transparent"};
`;

export const NumberText = styled.span<{ $headerShrinked: boolean }>`
  font-size: ${({ $headerShrinked }) => ($headerShrinked ? "3rem" : "6rem")};
  font-weight: 600;
  letter-spacing: -0.2rem;
  margin-right: 0.5rem;
  transition: font-size 0.4s;
`;

export const Text = styled.span<{ $headerShrinked: boolean }>`
  font-size: ${({ $headerShrinked }) => ($headerShrinked ? "1.5rem" : "2rem")};
  padding-left: 0.3rem;
  transition: font-size 0.4s;
`;

export const StyledAnchor = styled.a`
  color: ${colors.TEXT.WHITE};
  font-size: 2rem;
  display: inline;

  :hover {
    color: ${colors.TEXT.GREY_2};
  }
`;
