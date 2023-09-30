interface ColorSchema {
  accent: string;
  primary: string;
  secondary: string;
  background: string;
}

interface User {
  id: string;
  name: string;
  theme: string;
  themes: string[];
}

interface Theme {
  [id: string]: {
    id: string;
    color_schema: ColorSchema;
    title: string;
  };
}

interface Storage {
  users: User[];
  themes: Theme;
}

export const exampleStorage: Storage = {
  users: [
    {
      id: "1",
      name: "John",
      theme: "tokyo_night",
      themes: ["tokyo_night", "monokai"],
    },
  ],

  themes: {
    tokyo_night: {
      color_schema: {
        primary: "#70A6FF",
        secondary: "#C0CAF5",
        accent: "#BF91F3",
        background: "#1A1B26",
      },
      title: "Tokyo Night",
      id: "tokyo_night",
    },

    monokai: {
      color_schema: {
        primary: "#F92672",
        secondary: "#66D9EF",
        accent: "#A6E22E",
        background: "#272822",
      },
      title: "Monokai",
      id: "monokai",
    },
  },
};
