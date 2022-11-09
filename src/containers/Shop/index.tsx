import React, { useEffect, useState } from "react";
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
import { CATEGORIES } from "@/utils/constants/enums";
import { FlexContainer } from "../Home/styles";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { message, Spin } from "antd";
import useItem from "@/hooks/useItem";
import { Item } from "@/types/items";
import { itemAtom } from "@/store/item";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[CATEGORIES.NEW]
  );
  const [, setCart] = useAtom(cartAtom);
  const [itemStore, setItemStore] = useAtom(itemAtom);
  const { getItems, items } = useItem();

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setItemStore(items);
    }
  }, [items]);

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

  const addItemToCart = (item: Item) => {
    // setCart((prev) => [
    //   ...prev,
    //   {
    //     itemId,
    //     itemName,
    //     itemPrice,
    //   },
    // ]);
    message.success(`${item.prod_name} added to cart`);
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
        {itemStore.length > 0 ? (
          itemStore.map((item, index) => (
            <MotionCol
              key={`${item.article_id}_${index}`}
              span={8}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              <ImageContainer $backgroundUrl={item.article_url} />
              <FlexContainer>
                <MonospaceText>{item.prod_name}</MonospaceText>
                <Price>S${(Number(item.price) * 590).toFixed(2)}</Price>
              </FlexContainer>
              <StyledButton onClick={() => addItemToCart(item)}>
                Add to Bag
              </StyledButton>
            </MotionCol>
          ))
        ) : (
          <Spin />
        )}
      </StyledRow>
    </ShopContainer>
  );
};

export default Shop;

// export const getStaticProps = async () => {
//   const { getItems, items } = useItem();
//   await getItems();
//   return {
//     props: items,
//   };
// };
