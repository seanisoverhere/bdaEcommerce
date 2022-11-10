import React from "react";
import { Result } from "antd";
import { RecommendationsContainer, ResultsContainer, Title } from "./styles";
import { useAtom } from "jotai";
import { recommendationAtom } from "@/store/recommendation";

const Success = () => {
  const [recommendations] = useAtom(recommendationAtom);
  console.log(recommendations)
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
      </RecommendationsContainer>
    </>
  );
};

export default Success;
