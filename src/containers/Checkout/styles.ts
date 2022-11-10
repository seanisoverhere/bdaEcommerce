import styled from "styled-components";
// @ts-ignore
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Divider, Row, Space } from "antd";
import colors from "@/utils/constants/colors";

export const CheckoutContainer = styled.div`
  margin: 9rem 5rem 2rem;
`;

export const CheckoutTitle = styled.div`
  font-weight: 600;
  font-size: 3rem;
`;

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 100%;
`;

export const FormWidth = styled.div`
  text-align: left;
  display: flex;
  padding-right: 10rem;
  width: 80%;
`;

export const ItemWidth = styled.div`
  display: flex;
  position: absolute;
  right: 4%;
  top: 15%;
  flex-direction: column;
  padding-left: 1rem;
  width: 20%;
`;

export const StyledCard = styled(Card)`
  && {
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2rem;
`;

export const StyledRow = styled(Row)`
  && {
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    height: 100%;
    position: absolute;
    right: 25%;
    border-color: ${colors.BACKGROUND.GREY_2};
  }
`;

export const MiniImage = styled.img`
  width: 50px;
  padding-right: 0.5rem;
`;

export const FlexSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
`;

export const TotalText = styled.div`
  text-align: right;
  font-weight: 600;
  margin-bottom: 1rem;
`;
