import { FC, ReactNode } from "react";
import "./preview-menu.styles.css";

interface Props {
  children?: ReactNode;
}

interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
}

const items: (MenuItem | null)[] = [
  { id: "0", title: "About" },
  null,
  { id: "1", title: "Flow duration", children: [] },
  { id: "2", title: "Break duration", children: [] },
  { id: "3", title: "Session count", children: [] },
  { id: "4", title: "Music", children: [] },
  null,
  { id: "5", title: "Settings", children: [] },
  { id: "6", title: "Themes", children: [{ id: "9", title: "Night owl" }] },
  { id: "7", title: "Statistics..." },
  null,
  { id: "8", title: "Quit" },
];


const PreviewMenu: FC<Props> = () => {
  return (
    <div className="preview-menu">
      {items.map((item, inx) =>
        !item ? (
          <div className="preview-menu__item_separator" key={inx} />
        ) : (
          <div className="preview-menu__item" key={item.id + inx}>
            <span className="item__title">{item.title}</span>

            {item.children?.length ? (
              <span className="item__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <></>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default PreviewMenu;
