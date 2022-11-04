import React, { useState } from "react";
import {
  CategoryContainer,
  CategoryText,
  ShopContainer,
  ShopTitle,
  StyledRow,
} from "./styles";
import ScrollContainer from "react-indiana-drag-scroll";
import { categories } from "@/utils/constants/categories";
import { mockItems } from "@/mock/mockItems";
import { CATEGORIES } from "@/utils/constants/enums";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[CATEGORIES.NEW]
  );

  return (
    <ShopContainer>
      <ShopTitle>CATALOG</ShopTitle>
      <CategoryContainer>
        <ScrollContainer style={{ display: "flex" }}>
          {Object.entries(categories).map(([key, value], index) => (
            <CategoryText
              key={`${key}_${value}_${index}`}
              onClick={() => setSelectedCategory(value)}
              $isActive={selectedCategory === value}
            >
              {value}
            </CategoryText>
          ))}
        </ScrollContainer>
      </CategoryContainer>
      <StyledRow>
        {mockItems[selectedCategory].map((item) => (
          <div key={item.itemName}>{item.itemName}</div>
        ))}
      </StyledRow>
    </ShopContainer>
  );
};

export default Shop;
