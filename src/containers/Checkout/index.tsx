import React from "react";
import {
  CheckoutContainer,
  CheckoutTitle,
  FlexContainer,
  FormWidth,
  ItemWidth,
} from "./styles";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import {
  ItemDetails,
  MiniImage,
  TextContainer,
  Title,
} from "@/components/Navigation/styles";
import { Divider, Space } from "antd";

const Checkout = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <CheckoutContainer>
      <CheckoutTitle>CHECKOUT</CheckoutTitle>
      {cart.length > 0 ? (
        <FlexContainer>
          <FormWidth>Some form</FormWidth>
          <ItemWidth style={{ alignItems: "end" }}>
            {cart.map((item) => (
              <>
                <Space direction="vertical" style={{ paddingBottom: "2rem" }}>
                  <MiniImage src={item.article_url} />
                  <Title>{item.prod_name} x1</Title>
                  <span>
                    <Title>Price: </Title>
                    S${(Number(item.price) * 590).toFixed(2)}
                  </span>
                </Space>
              </>
            ))}
          </ItemWidth>
        </FlexContainer>
      ) : (
        <TextContainer>Your cart is empty..</TextContainer>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
