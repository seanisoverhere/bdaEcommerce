import React from "react";
import {
  Container,
  HeroContainer,
  HeroText,
  StyledDivider,
  BrandText,
  MainContainer,
  RecommendationText,
  StyledImgBig,
  StyledImgSmall,
  ImageText,
  FlexContainer,
} from "./styles";
import { Row, Col } from "antd";

const Home = () => {
  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <Container>
      <HeroContainer>
        <HeroText initial="initial" animate="animate" variants={variants}>
          Wear the best.
        </HeroText>
        <StyledDivider orientation="right">
          <BrandText>H&M</BrandText>
        </StyledDivider>
      </HeroContainer>
      <MainContainer>
        <RecommendationText>BEST SELLER</RecommendationText>
        <Row justify="start" gutter={[80, 0]}>
          <Col span={8}>
            <StyledImgBig src="/fashion1.jpg" />
            <FlexContainer>
              <ImageText>[1]</ImageText>
              <ImageText>Studio Collection</ImageText>
            </FlexContainer>
          </Col>
          <Col span={16}>
            <StyledImgSmall src="/fashion2.jpg" />
            <FlexContainer style={{ width: "40%" }}>
              <ImageText>[2]</ImageText>
              <ImageText>Core Collection</ImageText>
            </FlexContainer>
          </Col>
        </Row>
      </MainContainer>
    </Container>
  );
};
export default Home;
