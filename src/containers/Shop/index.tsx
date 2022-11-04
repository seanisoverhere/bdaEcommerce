import React from "react";
import {
  CategoryContainer,
  CategoryText,
  ShopContainer,
  ShopTitle,
} from "./styles";

const Shop = () => {
  return (
    <ShopContainer>
      <ShopTitle>CATALOG</ShopTitle>
      <CategoryContainer>
        <CategoryText $isActive>NEW</CategoryText>
        <CategoryText>POPULAR</CategoryText>
        <CategoryText>SHIRTS</CategoryText>
        <CategoryText>JEANS</CategoryText>
        <CategoryText>GARMENTS</CategoryText>
      </CategoryContainer>
    </ShopContainer>
  );
};

export default Shop;
