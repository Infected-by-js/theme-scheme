const loadInitialTheme = () => {
  const savedTheme = getItem("theme");

  return savedTheme === "dark";
};

const saveTheme = (isDark) => setItem("theme", isDark ? "dark" : "light");

const updateTheme = (isDark) =>
  document.body.setAttribute("data-theme", isDark ? "dark" : "light");

const setTransition = () => {
  document.body.classList.add("theme-transition");
  setTimeout(() => {
    document.body.classList.remove("theme-transition");
  }, 300);
};

const watchTheme = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  prefersDarkMode.onchange = (event) => {
    if (event.matches) document.body.setAttribute("data-theme", "dark");
    else document.body.setAttribute("data-theme", "light");
  };
};

export const useThemeStore = defineStore("theme", () => {
  const isDarkTheme = ref(loadInitialTheme());

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;

    setTransition();
    saveTheme(isDarkTheme.value);
  };

  watchTheme();

  watch(isDarkTheme, updateTheme, { immediate: true });

  return {
    isDarkTheme,
    toggleTheme,
  };
});
