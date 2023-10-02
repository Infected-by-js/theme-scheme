import { applyColorSchema } from "@/contexts/theme/helpers";
import { ColorSchema } from "@/types";
import { Button, ColorInput } from "@/ui/atoms";
import { FC, useEffect, useState } from "react";
import "./theme-form.styles.css";

interface Props {
  schema: ColorSchema;
  onSaveTheme: (name: string, theme: ColorSchema) => void;
}

const ThemeForm: FC<Props> = ({ schema, onSaveTheme }) => {
  const [colors, setColors] = useState(schema);
  const [themeName, setThemeName] = useState("My Theme");

  const [isUnsaved, setIsUnsaved] = useState(false);

  const handleColorChange = (name: string, color: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [name]: color,
    }));

    applyColorSchema(colors);
    setIsUnsaved(true);
  };

  const handleSaveTheme = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSaveTheme(themeName, colors);
    setIsUnsaved(false);
  };

  useEffect(() => {
    setColors(schema);
    setIsUnsaved(false);
  }, [schema]);

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

      <form className="theme-form__form form" onSubmit={handleSaveTheme}>
        <input
          className="form__input"
          type="text"
          placeholder="Enter Theme Name"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          disabled={!isUnsaved}
        />

        <Button disabled={!isUnsaved} type="submit" style={{ width: "100%" }}>
          Save Theme
        </Button>
      </form>
    </div>
  );
};

export default ThemeForm;
