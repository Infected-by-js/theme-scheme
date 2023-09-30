import { Theme } from "@/data/themes";
import { Button, ColorInput } from "@/shared/components";
import { FC, useEffect, useState } from "react";
import "./theme-form.styles.css";

interface Props {
  theme: Theme;
  onSaveTheme: (name: string, theme: Theme) => void;
}

const ThemeForm: FC<Props> = ({ theme, onSaveTheme }) => {
  const [colors, setColors] = useState(theme);
  const [themeName, setThemeName] = useState("My Theme");

  const [isUnsaved, setIsUnsaved] = useState(false);

  const handleColorChange = (name: string, color: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [name]: color,
    }));

    setIsUnsaved(true);
  };

  const handleSaveTheme = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSaveTheme(themeName, colors);
    setIsUnsaved(false);
  };

  useEffect(() => {
    setColors(theme);
    setIsUnsaved(false);
  }, [theme]);

  return (
    <div className="theme-form">
      <div className="theme-form__colors">
        {Object.entries(colors).map(([name, color]) => (
          <ColorInput
            color={color}
            onChange={(newColor) => handleColorChange(name, newColor)}
            key={name}
          />
        ))}
      </div>

      <form
        className="theme-form__form form"
        onSubmit={handleSaveTheme}
        style={{ opacity: isUnsaved ? "1" : "0" }}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Enter Theme Name"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
        />

        <Button disabled={!isUnsaved} type="submit" style={{ width: "100%" }}>
          Save Theme
        </Button>
      </form>
    </div>
  );
};

export default ThemeForm;
