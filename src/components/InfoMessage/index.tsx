import React from "react";
import { InfoBox, Title } from "./InfoMessage.styled";

interface Props {
  title: string;
}

const InfoMessage = (props: Props) => {
  return (
    <InfoBox>
      <Title>{props.title}</Title>
    </InfoBox>
  );
};

export default InfoMessage;
