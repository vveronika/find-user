import React from "react";
import { Input } from "./styles";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const PrimaryInput = (props: Props) => {
  return (
    <Input
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default PrimaryInput;
