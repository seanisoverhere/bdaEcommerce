import React from "react";
import {
  StyledNav,
  NumberText,
  Text,
  StyledAnchor,
  FlexContainer,
} from "./styles";
import Link from "next/link";

const Navigation = () => {
  return (
    <StyledNav>
      <FlexContainer>
        <Link href="/">
          <StyledAnchor>
            <NumberText>01</NumberText>
            <Text>HOME</Text>
          </StyledAnchor>
        </Link>
        <Link href="/">
          <StyledAnchor>
            <NumberText>02</NumberText>
            <Text>SHOP</Text>
          </StyledAnchor>
        </Link>
        <Link href="/">
          <StyledAnchor>
            <NumberText>03</NumberText>
            <Text>ABOUT</Text>
          </StyledAnchor>
        </Link>
      </FlexContainer>
    </StyledNav>
  );
};

export default Navigation;
