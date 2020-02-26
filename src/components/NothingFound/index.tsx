import React from "react";
import { InfoBox, Title } from "./styles";

interface Props {
  title: string;
}

const NothingFound = (props: Props) => {
  return (
    <InfoBox>
      <Title>{props.title}</Title>
    </InfoBox>
  );
};

export default NothingFound;
