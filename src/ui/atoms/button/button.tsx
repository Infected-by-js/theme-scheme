import { FC, HTMLProps, PropsWithChildren } from "react";
import "./button.styles.css";

interface Props extends PropsWithChildren<HTMLProps<HTMLButtonElement>> {
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
}

const Button: FC<Props> = ({ children, isActive, ...rest }) => {
  return (
    <button className={`btn ${isActive ? "active" : ""}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
