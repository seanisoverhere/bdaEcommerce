import React, { useState } from "react";
import {
  CategoryContainer,
  CategoryText,
  ShopContainer,
  ShopTitle,
} from "./styles";
import ScrollContainer from "react-indiana-drag-scroll";
import { categories } from "@/utils/constants/categories";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories["New"]
  );

  return (
    <ShopContainer>
      <ShopTitle>CATALOG</ShopTitle>
      <CategoryContainer>
        <ScrollContainer style={{ display: "flex" }}>
          {Object.entries(categories).map(([key, value]) => (
            <>
              <CategoryText
                key={key}
                onClick={() => setSelectedCategory(value)}
                $isActive={selectedCategory === value}
              >
                {value}
              </CategoryText>
            </>
          ))}
        </ScrollContainer>
      </CategoryContainer>
    </ShopContainer>
  );
};

export default Shop;
