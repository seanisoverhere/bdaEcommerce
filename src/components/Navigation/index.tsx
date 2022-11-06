import React, { useState, useEffect } from "react";
import {
  StyledNav,
  NumberText,
  Text,
  StyledAnchor,
  StyledButton,
} from "./styles";
import Link from "next/link";
import { Badge, Space, Drawer } from "antd";
import { useRouter } from "next/router";
import { ShoppingOutlined } from "@ant-design/icons";

const Navigation = () => {
  const router = useRouter();
  const [isHeaderShrinked, setIsHeaderShrinked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <Badge count={5}>
          <ShoppingOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => setIsOpen(true)}
          />
        </Badge>
      )}
      <Drawer
        title="Checkout"
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <StyledButton onClick={proceedToCheckout}>
          Proceed to checkout
        </StyledButton>
      </Drawer>
    </StyledNav>
  );
};

export default Navigation;
