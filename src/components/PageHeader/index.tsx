import React from "react";
import { HeaderWrapper, Title } from "./PageHeader.styled";

interface Props {
  title: string;
}

const PageHeader = (props: Props) => {
  return (
    <HeaderWrapper>
      <Title>{props.title}</Title>
    </HeaderWrapper>
  );
};

export default PageHeader;
