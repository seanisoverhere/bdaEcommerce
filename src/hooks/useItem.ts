import { useState } from "react";
import bdaApi from "@/services/api/bdaApi";
import recommendationApi from "@/services/api/bdaApi";
import { ApiResponse } from "apisauce";
import { Item, RecommendationRequest } from "@/types/items";

const useItem = () => {
  const [items, setItems] = useState<Array<Item>>([]);
  const [recommendations, setRecommendations] = useState<Array<Item>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getItems = async () => {
    setIsLoading(true);
    const response: ApiResponse<any> = await bdaApi.getItems();
    if (response.ok) {
      setItems(response.data);
    }
    setIsLoading(false);
  };

  const getRecommendations = async (data: RecommendationRequest) => {
    const response: ApiResponse<any> =
      await recommendationApi.getRecommendations(data);
    if (response.ok) {
      setRecommendations(response.data.slice(0, 10));
    }
  };

  return {
    items,
    recommendations,
    isLoading,
    getItems,
    getRecommendations,
  };
};

export default useItem;
