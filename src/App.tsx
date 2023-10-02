import { ThemeProvider } from "./contexts/theme";
import { UserProvider } from "./contexts/user";
import { MainPage } from "./ui/pages/main";

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
