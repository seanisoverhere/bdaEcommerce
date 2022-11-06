import styled from "styled-components";
import colors from "@/utils/constants/colors";

export const StyledNav = styled.div<{ $headerShrinked: boolean }>`
  position: fixed;
  transition: 0.4s;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 5rem;
  background-color: ${({ $headerShrinked }) =>
    $headerShrinked ? colors.BACKGROUND.BROWN_2 : "transparent"};
  box-shadow: ${({ $headerShrinked }) =>
    $headerShrinked && "0px 2px 4px 0px rgba(0,0,0,0.2)"};
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

export const StyledAnchor = styled.a<{ $headerShrinked?: boolean }>`
  color: ${({ $headerShrinked }) =>
    $headerShrinked ? colors.TEXT.GREY_1 : colors.TEXT.WHITE};
  font-size: 2rem;
  display: inline;
  transition: color 0.4s;

  :hover {
    color: ${({ $headerShrinked }) =>
      $headerShrinked ? colors.TEXT.GREY_3 : colors.TEXT.GREY_1};
  }
`;

export const StyledButton = styled.button`
  all: unset;
  text-align: center;
  border-radius: 10px;
  height: 40px;
  width: 87%;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.TEXT.BLACK};
  background-color: ${colors.BACKGROUND.BROWN_3};
  cursor: pointer;
  position: absolute;
  bottom: 3%;
  transition: background-color 0.4s;

  :hover {
    background-color: ${colors.BACKGROUND.BROWN_4};
  }
`;

export const TextContainer = styled.div`
  position: relative;
`;
