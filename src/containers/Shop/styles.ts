import styled from "styled-components";

export const ShopContainer = styled.div`
  margin: 9rem 5rem 2rem;
`;

export const ShopTitle = styled.div`
  font-weight: 600;
  font-size: 3rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const CategoryText = styled.div<{ $isActive?: boolean }>`
  font-weight: 600;
  font-size: 8rem;
  padding-right: 3rem;
  color: ${({ $isActive }) => ($isActive ? "#000" : "#DEDEDE")};
  cursor: pointer;
`;
