import styled from "styled-components";
import colors from "@/utils/constants/colors";

export const StyledNav = styled.div`
  position: fixed;
  transition: 0.4s;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 5rem;
  align-items: start;
`;

export const NumberText = styled.span`
  font-size: 6rem;
  font-weight: 600;
  letter-spacing: -0.4rem;
  margin-right: 0.5rem;
`;

export const Text = styled.span`
  font-size: 2rem;
  padding-left: 0.3rem;
`;

export const StyledAnchor = styled.a`
  color: ${colors.TEXT.WHITE};
  font-size: 2rem;
  display: inline;

  :hover {
    color: ${colors.TEXT.GREY_2};
  }
`;
