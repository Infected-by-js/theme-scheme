import { Theme } from "@/types";
import { Button } from "@/ui/atoms";
import { FC } from "react";
import "./theme-toolbar.styles.css";

interface Props {
  themeId: string;
  ownerId: string;
  themes: Theme[];
  onSetTheme: (theme: string) => void;
  onDeleteTheme: (themeId: string) => void;
}

const ThemeToolbar: FC<Props> = ({
  themeId,
  ownerId,
  themes,
  onSetTheme,
  onDeleteTheme,
}) => {
  return (
    <div className="toolbar">
      {themes.map(({ id, title, owner }) => (
        <div className="toolbar__item" key={id}>
          <Button
            isActive={id === themeId}
            onClick={() => onSetTheme(id)}
            style={{ flex: 1 }}
          >
            {title}
          </Button>

          {owner === ownerId && (
            <Button
              onClick={() => onDeleteTheme(id)}
              style={{ padding: " 8px", height: "100%" }}
            >
              <svg
                viewBox="0 0 24 24"
                height={16}
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 11V17" />
                <path d="M14 11V17" />
                <path d="M4 7H20" />
                <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" />
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" />
              </svg>
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThemeToolbar;
