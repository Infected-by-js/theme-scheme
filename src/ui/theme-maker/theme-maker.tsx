import { Theme } from "@/themes";
import { FC, ReactNode } from "react";
import "./styles.css";

interface Props {
  children?: ReactNode;
  theme: Theme;
}

interface ItemProps {
  children?: ReactNode;
  name: string;
  color: string;
}

const ThemeMakerItem: FC<ItemProps> = ({ name, color }) => {
  return (
    <div className="theme-maker-item" style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

const ThemeMaker: FC<Props> = ({ theme }) => {
  return (
    <div className="theme-maker">
      {Object.entries(theme).map(([name, color]) => (
        <ThemeMakerItem name={name} color={color} key={name} />
      ))}
    </div>
  );
};

export default ThemeMaker;
