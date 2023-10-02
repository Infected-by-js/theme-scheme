export const setThemeQueryParam = (themeName: string): void => {
  const url = new URL(window.location.href);

  url.searchParams.set("theme", themeName);
  window.history.replaceState({}, "", url.toString());
};
