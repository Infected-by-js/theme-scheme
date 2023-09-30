import { THEME_NAMES, ThemeName, themeStorage } from "@/data/themes";

import { Preview, ThemeForm, ThemeToolbar } from "@/widgets";
import { useEffect, useState } from "react";

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
      <ThemeToolbar theme={theme} onSetTheme={onSetTheme} />

      <Preview />

      <div style={{ margin: "0 1rem" }}></div>

      <ThemeForm
        theme={themeStorage[theme]}
        onSaveTheme={(name, theme) => console.log(name, theme)}
      />
    </>
  );
}

export default App;
