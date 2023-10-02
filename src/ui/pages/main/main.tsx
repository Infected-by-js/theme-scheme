import { useTheme } from "@/contexts/theme";
import { useUser } from "@/contexts/user";
import { ColorSchema, Theme } from "@/types";
import { Preview, ThemeForm, ThemeToolbar } from "@/ui/molecules";
import { useEffect } from "react";
import "./main.styles.css";

//https://www.canva.com/colors/color-palettes/ get api

const MainPage = () => {
  const { user } = useUser();
  const {
    activeTheme,
    themes,
    setTheme,
    getUserThemes,
    createUserTheme,
    deleteUserTheme,
  } = useTheme();

  useEffect(() => {
    if (user) getUserThemes(user);
  }, [user, getUserThemes]);

  const createTheme = (title: string, schema: ColorSchema) => {
    const theme: Omit<Theme, "id"> = {
      title,
      color_schema: schema,
      owner: user!.id,
    };

    createUserTheme(theme);
  };

  const deleteTheme = (themeId: string) => {
    if (user) deleteUserTheme(user, themeId);
  };

  return !user || !activeTheme ? (
    <div>Loading...</div>
  ) : (
    <div className="main">
      <div className="sidebar">
        <div className="sidebar__content">
          <ThemeToolbar
            themeId={activeTheme.id}
            ownerId={user.id}
            themes={themes}
            onSetTheme={setTheme}
            onDeleteTheme={deleteTheme}
          />
        </div>
        <div className="sidebar__footer">
          <ThemeForm
            schema={activeTheme.color_schema}
            onSaveTheme={createTheme}
          />
        </div>
      </div>

      <div className="content">
        <Preview />
      </div>
    </div>
  );
};

export default MainPage;
