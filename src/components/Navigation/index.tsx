import React, { useState, useEffect } from "react";
import { StyledNav, NumberText, Text, StyledAnchor } from "./styles";
import Link from "next/link";
import { Space } from "antd";

const Navigation = () => {
  const [isHeaderShrinked, setIsHeaderShrinked] = useState<boolean>(false);

  useEffect(() => {
    const resizeOnScroll = () => {
      const distanceY = window.scrollY;
      const shrinkOn = 100;

      if (distanceY > shrinkOn) {
        setIsHeaderShrinked(true);
      } else {
        setIsHeaderShrinked(false);
      }
    };

    window.addEventListener("scroll", resizeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", resizeOnScroll);
  }, []);

  return (
    <StyledNav $headerShrinked={isHeaderShrinked}>
      <Space size={150}>
        <Link href="/">
          <StyledAnchor $headerShrinked={isHeaderShrinked}>
            <NumberText $headerShrinked={isHeaderShrinked}>01</NumberText>
            <Text $headerShrinked={isHeaderShrinked}>HOME</Text>
          </StyledAnchor>
        </Link>
        <Link href="/">
          <StyledAnchor $headerShrinked={isHeaderShrinked}>
            <NumberText $headerShrinked={isHeaderShrinked}>02</NumberText>
            <Text $headerShrinked={isHeaderShrinked}>SHOP</Text>
          </StyledAnchor>
        </Link>
        <Link href="/">
          <StyledAnchor $headerShrinked={isHeaderShrinked}>
            <NumberText $headerShrinked={isHeaderShrinked}>03</NumberText>
            <Text $headerShrinked={isHeaderShrinked}>ABOUT</Text>
          </StyledAnchor>
        </Link>
      </Space>
    </StyledNav>
  );
};

export default Navigation;
