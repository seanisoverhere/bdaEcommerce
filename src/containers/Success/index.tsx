import React from "react";
import { Result, Skeleton, Space } from "antd";
import {
  Img,
  RecommendationsContainer,
  ResultsContainer,
  Title,
} from "./styles";
import { useAtom } from "jotai";
import { recommendationAtom } from "@/store/recommendation";
import { StyledScrollContainer } from "@/components/Navigation/styles";

const Success = () => {
  const [recommendations] = useAtom(recommendationAtom);
  console.log(recommendations);
  return (
    <>
      <ResultsContainer>
        <Result
          status="success"
          title="Successfully Purchased Items"
          subTitle="Your order number is: BDA441928382512"
        />
      </ResultsContainer>
      <RecommendationsContainer>
        <Title>Recommendations for you:</Title>
        <StyledScrollContainer>
          {recommendations.length > 0 ? (
            recommendations.map((item) => (
              <Space direction="vertical">
                <Img src={item.article_url} />
                <div>{item.prod_name}</div>
              </Space>
            ))
          ) : (
            <Skeleton active round />
          )}
        </StyledScrollContainer>
      </RecommendationsContainer>
    </>
  );
};

export default Success;
