import React from "react";
import { Container, HeroContainer, HeroText, StyledDivider } from "./styles";

const Home = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroText>Wear the best.</HeroText>
        <StyledDivider orientation="right">H&M</StyledDivider>
      </HeroContainer>
      More stuf
    </Container>
  );
};
export default Home;
