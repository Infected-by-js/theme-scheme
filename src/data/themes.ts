export interface Theme {
  accent: string;
  primary: string;
  secondary: string;
  background: string;
}

export const THEME_NAMES = {
  night_owl: "night_owl",
  monokai: "monokai",
  tokyo_night: "tokyo_night",
};

export type ThemeName = keyof typeof THEME_NAMES;

type ThemeStorage = { [name in ThemeName]: Theme };

export const themeStorage: ThemeStorage = {
  night_owl: {
    primary: "#feac00",
    secondary: "#d8dbdf",
    accent: "#59418d",
    background: "#061626",
  },

  monokai: {
    primary: "#F92672",
    secondary: "#66D9EF",
    accent: "#A6E22E",
    background: "#272822",
  },

  tokyo_night: {
    primary: "#70A6FF",
    secondary: "#C0CAF5",
    accent: "#BF91F3",
    background: "#1A1B26",
  },
};

export interface Theme {
  accent: string;
  primary: string;
  secondary: string;
  background: string;
}
