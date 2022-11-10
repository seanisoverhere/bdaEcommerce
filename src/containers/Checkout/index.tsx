import React, { useEffect, useState } from "react";
import {
  CheckoutContainer,
  CheckoutTitle,
  FieldContainer,
  FlexContainer,
  FormWidth,
  ItemWidth,
  StyledCard,
  StyledDivider,
  StyledRow,
  MiniImage,
  FlexSpace,
  TotalText,
  Subtitle,
} from "./styles";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { TextContainer, Title } from "@/components/Navigation/styles";
import { Col, Divider, Space } from "antd";
import FormField from "@/components/FormField";
import { useForm } from "react-hook-form";
import { StyledButton } from "../Shop/styles";
import useItem from "@/hooks/useItem";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { getRecommendations, recommendations } = useItem()

  const [cart] = useAtom(cartAtom);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const onSubmit = (data: any) => {
    const dataToPost = {
      article_id: cart[0].article_id,
      date: '2022-11-10',
      price: Number(cart[0].price) * 590,
      customer_id: process.env.NEXT_PUBLIC_CUSTOMER_ID as string,
    }
    getRecommendations(dataToPost)
  };

  useEffect(() => {
    console.log(recommendations)
  }, [recommendations])

  return (
    <CheckoutContainer>
      <StyledDivider type="vertical" />
      <CheckoutTitle style={{ marginBottom: "2rem" }}>CHECKOUT</CheckoutTitle>
      {cart.length > 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Subtitle>Credit Card Information</Subtitle>
          <FlexContainer>
            <FormWidth>
              <StyledCard
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={cardNumber}
              />

              <FieldContainer>
                <StyledRow gutter={[24, 48]}>
                  <Col span={12}>
                    <FormField
                      register={register}
                      errors={errors}
                      inputText="Card Number"
                      name="number"
                      type="text"
                      setValue={setCardNumber}
                      input={cardNumber}
                      onFocus={setFocus}
                      isRequired
                    />
                  </Col>
                  <Col span={12}>
                    <FormField
                      register={register}
                      errors={errors}
                      inputText="Cardholder Name"
                      name="name"
                      type="text"
                      setValue={setName}
                      onFocus={setFocus}
                      input={name}
                      isRequired
                    />
                  </Col>
                  <Col span={12}>
                    <FormField
                      register={register}
                      errors={errors}
                      inputText="Card Expiry"
                      name="expiry"
                      type="text"
                      setValue={setExpiry}
                      input={expiry}
                      onFocus={setFocus}
                      isRequired
                    />
                  </Col>
                  <Col span={12}>
                    <FormField
                      register={register}
                      errors={errors}
                      inputText="CVC"
                      name="cvc"
                      type="text"
                      setValue={setCvc}
                      onFocus={setFocus}
                      input={cvc}
                      isRequired
                    />
                  </Col>
                  <Col span={24}></Col>
                </StyledRow>
              </FieldContainer>
            </FormWidth>
            <StyledDivider type="vertical" />
            <ItemWidth>
              <Title style={{ fontSize: "1.5rem" }}>Cart</Title>
              {cart.map((item) => (
                <>
                  <FlexSpace>
                    <Space>
                      <MiniImage src={item.article_url} />
                      <Title>{item.prod_name} x1</Title>
                    </Space>
                    <span>S${(Number(item.price) * 590).toFixed(2)}</span>
                  </FlexSpace>
                </>
              ))}
              <Divider />
              <TotalText>
                Total: S$
                {cart
                  .reduce((acc, item) => {
                    return acc + Number(item.price) * 590;
                  }, 0)
                  .toFixed(2)}
              </TotalText>

              <StyledButton type="submit">Pay</StyledButton>
            </ItemWidth>
          </FlexContainer>
          <Subtitle>Shipping Information</Subtitle>
          <FlexContainer>
            <FormWidth>
              <StyledRow gutter={[24, 24]} style={{ width: "100%" }}>
                <Col span={24}>
                  <FormField
                    register={register}
                    errors={errors}
                    inputText="Shipping Address"
                    name="address"
                    type="text"
                    setValue={setAddress}
                    input={address}
                    onFocus={setFocus}
                    isRequired
                  />
                </Col>
              </StyledRow>
            </FormWidth>
          </FlexContainer>
        </form>
      ) : (
        <TextContainer>Your cart is empty..</TextContainer>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
