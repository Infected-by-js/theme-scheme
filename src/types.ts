export interface ColorSchema {
  accent: string;
  primary: string;
  secondary: string;
  background: string;
}

export interface Theme {
  id: string;
  color_schema: ColorSchema;
  title: string;
  owner: string | null;
}

export interface User {
  id: string;
  name: string;
  theme: string;
}
