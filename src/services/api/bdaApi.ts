import dataUtils from "@/utils/dataUtils";
import apiSauce from "apisauce";

const bdaApi = apiSauce.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

bdaApi.addResponseTransform((response) => {
  response.data = dataUtils.toCamelCase(response.data);
});

// READ
const getItems = () => bdaApi.get("/articles");

export default {
  getItems,
};
