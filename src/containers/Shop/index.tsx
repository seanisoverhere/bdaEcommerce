import React, { useState } from "react";
import {
  CategoryContainer,
  CategoryText,
  ImageContainer,
  MonospaceText,
  MotionCol,
  Price,
  ShopContainer,
  ShopTitle,
  StyledRow,
  StyledButton,
} from "./styles";
import ScrollContainer from "react-indiana-drag-scroll";
import { categories } from "@/utils/constants/categories";
import { mockItems } from "@/mock/mockItems";
import { CATEGORIES } from "@/utils/constants/enums";
import { FlexContainer } from "../Home/styles";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { message } from "antd";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[CATEGORIES.NEW]
  );
  const [, setCart] = useAtom(cartAtom);

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const addItemToCart = (
    itemId: number,
    itemName: string,
    itemPrice: number
  ) => {
    setCart((prev) => [
      ...prev,
      {
        itemId,
        itemName,
        itemPrice,
      },
    ]);
    message.success(`${itemName} added to cart`);
  };

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
      <StyledRow gutter={[48, 48]}>
        {mockItems[selectedCategory].map((item) => (
          <MotionCol
            key={item.itemName}
            span={8}
            initial="initial"
            animate="animate"
            variants={variants}
          >
            <ImageContainer $backgroundUrl={item.image} />
            <FlexContainer>
              <MonospaceText>{item.itemName}</MonospaceText>
              <Price>S${item.itemPrice.toFixed(2)}</Price>
            </FlexContainer>
            <StyledButton
              onClick={() =>
                addItemToCart(item.itemId, item.itemName, item.itemPrice)
              }
            >
              Add to Bag
            </StyledButton>
          </MotionCol>
        ))}
      </StyledRow>
    </ShopContainer>
  );
};

export default Shop;
