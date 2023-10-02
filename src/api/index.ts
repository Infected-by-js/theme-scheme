import {
  createTheme,
  deleteTheme,
  getThemeById,
  getThemes,
  getUser,
} from "./requests";

export default {
  get: {
    user: <T>(userId: string) => getUser<T>(userId),
    theme: <T>(themeId: string) => getThemeById<T>(themeId),
    themes: <T>(owner: string | undefined) => getThemes<T>(owner),
  },

  create: {
    theme: <T extends { title: string }>(theme: T) => createTheme<T>(theme),
  },

  delete: {
    theme: <T extends { owner: string | null }>(owner: string, themeId: string) => deleteTheme<T>(owner, themeId), // prettier-ignore
  },
};
