import api from "@/api";
import { Theme, User } from "@/types";
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { applyColorSchema } from "./helpers";

export const ThemeContext = createContext({} as ThemeContextValue);

interface ThemeContextValue {
  themes: Theme[] | [];
  activeTheme: Theme | null;
  isLoading: boolean;

  getUserThemes: (user: User) => void;
  createUserTheme: (theme: Omit<Theme, "id">) => void;
  deleteUserTheme: (user: User, themeId: string) => boolean;

  setTheme: (themeId: string) => void;
}

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themes, setThemes] = useState<Theme[] | []>([]);
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setTheme = useCallback(
    (themeId: string) => {
      const theme = themes.find(({ id }) => id === themeId);

      if (theme) setActiveTheme(theme);
    },
    [themes]
  );

  const getUserThemes = useCallback(async (user: User) => {
    try {
      const themes = await api.get.themes<Theme>(user?.id);
      const theme = themes.find(({ id }) => id === user.theme);

      setThemes(themes);
      if (theme) setActiveTheme(theme);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createUserTheme = useCallback(
    async (theme: Theme) => {
      try {
        const createdTheme = await api.create.theme<Theme>(theme);

        if (createdTheme) {
          setThemes((oldThemes) => [...oldThemes, createdTheme]);
          setActiveTheme(createdTheme);
        }
      } catch (e) {
        console.log(e);
      }
    },
    [setActiveTheme]
  );

  const deleteUserTheme = useCallback(
    async (user: User, themeId: string) => {
      try {
        const isDeleted = await api.delete.theme<Theme>(user.id, themeId);

        if (!isDeleted) return;

        setThemes((oldThemes) => oldThemes.filter(({ id }) => id !== themeId));

        if (activeTheme?.id === themeId) setActiveTheme(themes[0]);
      } catch (error) {
        console.log("ERROR WHILE DELETE", error);
      }
    },
    [activeTheme, themes]
  );

  const value = useMemo(
    () => ({
      themes,
      activeTheme,
      isLoading,

      getUserThemes,
      createUserTheme,
      deleteUserTheme,
      setTheme,
    }),
    [
      themes,
      activeTheme,
      isLoading,
      setTheme,
      getUserThemes,
      createUserTheme,
      deleteUserTheme,
    ]
  );

  useEffect(() => {
    if (activeTheme) applyColorSchema(activeTheme.color_schema);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
