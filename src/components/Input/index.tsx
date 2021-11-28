import { InputHTMLAttributes } from "react";
import { Wrapper, Input, Hr } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function InputText(props: Props) {
  return (
    <Wrapper>
      <Input {...props} />
      <Hr />
    </Wrapper>
  )
}

export { InputText as Input };