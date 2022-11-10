import React, { useState, useEffect } from "react";
import {
  StyledNav,
  NumberText,
  Text,
  StyledAnchor,
  StyledButton,
  TextContainer,
  CartItemContainer,
  MiniImage,
  ItemDetails,
  Title,
  StyledDrawer,
  TotalPrice,
  StyledScrollContainer,
} from "./styles";
import Link from "next/link";
import { Badge, Space, Divider, Skeleton } from "antd";
import { useRouter } from "next/router";
import { ShoppingOutlined } from "@ant-design/icons";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";
import { recommendationAtom } from "@/store/recommendation";

const Navigation = () => {
  const router = useRouter();
  const [isHeaderShrinked, setIsHeaderShrinked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cart] = useAtom(cartAtom);
  const [recommendations] = useAtom(recommendationAtom);

  useEffect(() => {
    if (router.pathname === "/shop" || router.pathname === "/checkout") {
      setIsHeaderShrinked(true);
    } else {
      setIsHeaderShrinked(false);
    }

    const resizeOnScroll = () => {
      const distanceY = window.scrollY;
      const shrinkOn = 100;

      if (distanceY > shrinkOn) {
        setIsHeaderShrinked(true);
      } else {
        setIsHeaderShrinked(false);
      }
    };

    if (router.pathname === "/") {
      window.addEventListener("scroll", resizeOnScroll, { passive: true });
      return () => window.removeEventListener("scroll", resizeOnScroll);
    }
  }, [router]);

  const proceedToCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  return (
    <StyledNav $headerShrinked={isHeaderShrinked}>
      <Space size={150}>
        <Link href="/">
          <StyledAnchor $headerShrinked={isHeaderShrinked}>
            <NumberText $headerShrinked={isHeaderShrinked}>01</NumberText>
            <Text $headerShrinked={isHeaderShrinked}>HOME</Text>
          </StyledAnchor>
        </Link>
        <Link href="/shop">
          <StyledAnchor $headerShrinked={isHeaderShrinked}>
            <NumberText $headerShrinked={isHeaderShrinked}>02</NumberText>
            <Text $headerShrinked={isHeaderShrinked}>SHOP</Text>
          </StyledAnchor>
        </Link>
        <Link href="/checkout">
          <StyledAnchor $headerShrinked={isHeaderShrinked}>
            <NumberText $headerShrinked={isHeaderShrinked}>03</NumberText>
            <Text $headerShrinked={isHeaderShrinked}>CART</Text>
          </StyledAnchor>
        </Link>
      </Space>
      {isHeaderShrinked && (
        <Badge count={cart.length}>
          <ShoppingOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => setIsOpen(true)}
          />
        </Badge>
      )}
      <StyledDrawer
        title="Checkout"
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        {cart.length > 0 ? (
          cart.map((item) => (
            <>
              <CartItemContainer>
                <MiniImage src={item.article_url} />
                <ItemDetails>
                  <Space direction="vertical">
                    <Title>{item.prod_name} x1</Title>
                    <span>
                      <Title>Price: </Title>
                      S${(Number(item.price) * 590).toFixed(2)}
                    </span>
                  </Space>
                </ItemDetails>
              </CartItemContainer>
              <Divider />
            </>
          ))
        ) : (
          <TextContainer>Your cart is empty </TextContainer>
        )}
        <Title>Recommendations for you</Title>
        <StyledScrollContainer>
          {recommendations.length > 0 ? (
            recommendations.map((item) => (
              <Space direction="vertical">
                <MiniImage src={item.article_url} />
                <div>{item.prod_name}</div>
              </Space>
            ))
          ) : (
            <Skeleton active round />
          )}
        </StyledScrollContainer>
        <div>
          <TotalPrice>
            Total: S$
            {cart.reduce((acc, item) => acc + Number(item.price) * 590, 0)}
          </TotalPrice>
          <StyledButton onClick={proceedToCheckout}>
            Proceed to checkout
          </StyledButton>
        </div>
      </StyledDrawer>
    </StyledNav>
  );
};

export default Navigation;
