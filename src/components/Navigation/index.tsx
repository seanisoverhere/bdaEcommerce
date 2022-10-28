import React, { useEffect } from "react";
import {
  StyledNav,
  NumberText,
  Text,
  StyledAnchor,
} from "./styles";
import Link from "next/link";
import { Space } from "antd";

const Navigation = () => {
  useEffect(() => {
    const handler = () => console.log("hi");

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <StyledNav>
      <Space size={150}>
        <Link href="/">
          <StyledAnchor>
            <NumberText>01</NumberText>
            <Text>HOME</Text>
          </StyledAnchor>
        </Link>
        <Link href="/">
          <StyledAnchor>
            <NumberText>02</NumberText>
            <Text>SHOP</Text>
          </StyledAnchor>
        </Link>
        <Link href="/">
          <StyledAnchor>
            <NumberText>03</NumberText>
            <Text>ABOUT</Text>
          </StyledAnchor>
        </Link>
      </Space>
    </StyledNav>
  );
};

export default Navigation;
