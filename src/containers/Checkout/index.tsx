import React, { useState } from "react";
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
  MiniImage,
  TextContainer,
  Title,
} from "@/components/Navigation/styles";
import { Space } from "antd";
// @ts-ignore
import Cards from "react-credit-cards";
import { ICardDetails } from "@/types/card";
import "react-credit-cards/es/styles-compiled.css";

const Checkout = () => {
  const [cart] = useAtom(cartAtom);
  const [cardDetails, setCardDetails] = useState<ICardDetails>({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  return (
    <CheckoutContainer>
      <CheckoutTitle>CHECKOUT</CheckoutTitle>
      {cart.length > 0 ? (
        <FlexContainer>
          <FormWidth>
            <Cards
              cvc={cardDetails.cvc}
              expiry={cardDetails.expiry}
              focused={cardDetails.focus}
              name={cardDetails.name}
              number={cardDetails.number}
            />
          </FormWidth>
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
