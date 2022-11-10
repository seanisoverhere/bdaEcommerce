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
  SpinContainer,
} from "./styles";
import ScrollContainer from "react-indiana-drag-scroll";
import { categories } from "@/utils/constants/categories";
import { CATEGORIES } from "@/utils/constants/enums";
import { FlexContainer } from "../Home/styles";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { message, Spin, Skeleton } from "antd";
import useItem from "@/hooks/useItem";
import { Item, ItemList } from "@/types/items";
import { itemAtom } from "@/store/item";
import { recommendationAtom } from "@/store/recommendation";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[CATEGORIES.OUTDOOR]
  );
  const [, setCart] = useAtom(cartAtom);
  const [itemStore, setItemStore] = useAtom(itemAtom);
  const [recommendationStore, setRecommendationStore] =
    useAtom(recommendationAtom);
  const { getItems, items, getRecommendations, recommendations, isLoading } =
    useItem();

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const tempStore = items.reduce((acc, item) => {
        acc[item.garment_group_name] = acc[item.garment_group_name] || [];
        acc[item.garment_group_name].push(item);
        return acc;
      }, {} as ItemList);

      setItemStore(tempStore);
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

  const addItemToCart = async (item: Item) => {
    setCart((prev) => [...prev, item]);
    message.success(`${item.prod_name} added to cart`);
    await getRecommendations({
      article_id: item.article_id,
      date: "2022-11-11",
      price: Number(item.price) * 590,
      customer_id: process.env.NEXT_PUBLIC_CUSTOMER_ID as string,
      is_purchase: false,
    });
  };

  useEffect(() => {
    if (recommendations.length > 0) {
      setRecommendationStore((prev) => [...prev, ...recommendations]);
    }
  }, [recommendations]);

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
        {Object.keys(itemStore).length > 0 ? (
          itemStore[selectedCategory].map((item, index) => (
            <MotionCol
              key={`${item.article_id}_${index}`}
              lg={8}
              md={12}
              sm={24}
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
          <SpinContainer>
            <Skeleton active={isLoading} round />
          </SpinContainer>
        )}
      </StyledRow>
    </ShopContainer>
  );
};

export default Shop;
