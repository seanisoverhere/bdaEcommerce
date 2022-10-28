import React from "react";
import {
  Container,
  HeroContainer,
  HeroText,
  StyledDivider,
  BrandText,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroText>Wear the best.</HeroText>
        <StyledDivider orientation="right">
          <BrandText>H&M</BrandText>
        </StyledDivider>
      </HeroContainer>
      More stuf
    </Container>
  );
};
export default Home;
