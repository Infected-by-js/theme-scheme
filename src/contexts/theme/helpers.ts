import { ColorSchema } from "@/types";

export const applyColorSchema = (colorSchema: ColorSchema) => {
  const root = document.querySelector(":root") as HTMLElement;

  Object.entries(colorSchema).forEach(([name, value]) => {
    root.style.setProperty(`--color-${name}`, value);
  });
};
