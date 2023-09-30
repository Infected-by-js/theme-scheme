import { ThemeName } from "@/data/themes";
import { Button } from "@/shared/components";
import { FC } from "react";
import "./theme-toolbar.styles.css";

interface Props {
  theme: ThemeName;
  onSetTheme: (theme: ThemeName) => void;
}

const ThemeToolbar: FC<Props> = ({ theme, onSetTheme }) => {
  return (
    <div className="toolbar">
      <Button
        isActive={theme === "night_owl"}
        onClick={() => onSetTheme("night_owl")}
      >
        Night owl
      </Button>
      <Button
        onClick={() => onSetTheme("monokai")}
        isActive={theme === "monokai"}
      >
        Monokai
      </Button>
      <Button
        onClick={() => onSetTheme("tokyo_night")}
        isActive={theme === "tokyo_night"}
      >
        Tokyo night
      </Button>
    </div>
  );
};

export default ThemeToolbar;
