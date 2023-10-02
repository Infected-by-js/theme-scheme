import api from "./api";

export const getThemeById = <T>(themeId: string) => {
  return api.get<T>(`themes/${themeId}`);
};

export const getThemes = async <T>(owner: string | undefined) => {
  const themes = await api.get<(T & { owner: string | null })[]>(`themes`);

  if (!themes) return [];

  return owner
    ? themes.filter((theme) => theme.owner === null || theme.owner === owner)
    : themes;
};

export const createTheme = async <T extends { title: string }>(theme: T) => {
  const id =
    theme.title.toLowerCase().trim().replace(/ /g, "_") + crypto.randomUUID();

  const createdTheme = { ...theme, id };

  const isCreated = await api.set("themes", createdTheme);

  return isCreated ? createdTheme : null;
};

export const deleteTheme = async <T extends { owner: string | null }>(
  owner: string,
  themeId: string
) => {
  const theme = await getThemeById<T>(themeId);

  if (!theme) {
    throw new Error("This theme does not exist");
  }

  if (theme.owner !== owner) {
    throw new Error("You do not have the right to delete this theme");
  }

  return api.delete(`themes/${themeId}`);
};

export const getUser = <T>(userId: string) => {
  return api.get<T>(`users/${userId}`);
};
