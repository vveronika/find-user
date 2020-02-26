import React from "react";
import { ItemWrapper, OrderNumber, Title, Subtitle } from "./ListItem.styled";

interface Props {
  orderNumber: number;
  title: string;
  subtitle: string;
}

const ListItem = (props: Props) => {
  return (
    <ItemWrapper>
      <OrderNumber>{props.orderNumber + 1}.</OrderNumber>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </ItemWrapper>
  );
};

export default ListItem;
