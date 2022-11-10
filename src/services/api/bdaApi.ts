import { RecommendationRequest } from "@/types/items";
import apiSauce from "apisauce";

const bdaApi = apiSauce.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

const recommendationApi = apiSauce.create({
  baseURL: process.env.NEXT_PUBLIC_RECOMMENDATION_API,
})

// READ
const getItems = () => bdaApi.get("/articles");
const getRecommendations = (data: RecommendationRequest) => recommendationApi.post('/recommendation-engine', data);

export default {
  getItems,
  getRecommendations
};
