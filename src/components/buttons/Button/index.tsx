// types[primary, transparent, outlinePrimary, gradation, noEffectPrimary]
import React from "react";
import Wrapper from "./styles";

export interface Props {
  type: string;
  children: string;
}

const Button: React.FC<Props> = ({ type, children }: Props) => {
  return (
    <Wrapper type={type}>
      <button type="button">{children}</button>;
    </Wrapper>
  );
};

export default Button;
