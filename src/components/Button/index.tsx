import { HTMLAttributes, InputHTMLAttributes } from "react";
import { Button } from "./styles";

type Props = HTMLAttributes<HTMLButtonElement>;

function ActionButton(props: Props) {
  return <Button {...props} />
}

export { ActionButton as Button };