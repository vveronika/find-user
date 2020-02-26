import React from "react";
import { ListWrapper } from "./ItemsList.styled";
import ListItem from "../ListItem";
import { User } from "../../models/user";

interface Props {
  items: User[];
}

const ItemsList = (props: Props) => {
  return (
    <ListWrapper>
      {props.items.map((item, index) => (
        <ListItem
          key={item.id}
          orderNumber={index}
          title={item.name}
          subtitle={item.username}
        />
      ))}
    </ListWrapper>
  );
};

export default ItemsList;
