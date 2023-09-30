export interface ColorSchema {
  accent: string;
  primary: string;
  secondary: string;
  background: string;
}

export interface User {
  id: string;
  name: string;
  theme: string;
  themes: string[];
}

export interface Theme {
  [id: string]: {
    id: string;
    color_schema: ColorSchema;
    title: string;
  };
}
