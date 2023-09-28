import { useEffect, useState } from "react";
import "./App.css";
import { THEME_NAMES, ThemeName, themeStorage } from "./themes";
import ThemeMaker from "./ui/theme-maker/theme-maker";
import Timer from "./ui/timer/timer";

const setThemeSchema = (themeName: ThemeName) => {
  const root = document.querySelector(":root") as HTMLElement;
  const theme = themeStorage[themeName];

  Object.entries(theme).forEach(([name, value]) => {
    root.style.setProperty(`--color-${name}`, value);
  });
};

function App() {
  const [theme, setTheme] = useState<ThemeName>(
    THEME_NAMES.night_owl as ThemeName
  );

  const onSetTheme = (themeName: ThemeName) => {
    setTheme(themeName);
  };

  useEffect(() => {
    setThemeSchema(theme);
  }, [theme]);

  return (
    <>
      <div className="btns">
        <button
          onClick={() => onSetTheme("night_owl")}
          className={`btn ${theme === "night_owl" ? "active" : ""}`}
        >
          Night owl
        </button>
        <button
          onClick={() => onSetTheme("monokai")}
          className={`btn ${theme === "monokai" ? "active" : ""}`}
        >
          Monokai
        </button>
        <button
          onClick={() => onSetTheme("tokyo_night")}
          className={`btn ${theme === "tokyo_night" ? "active" : ""}`}
        >
          Tokyo night
        </button>
      </div>

      <Timer />

      <div style={{ margin: "0 1rem" }}></div>

      <ThemeMaker theme={themeStorage[theme]} />
    </>
  );
}

export default App;
