import { Outlet } from "react-router-dom";
import { Header } from "./common/components/header";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./common/theme/customTheme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
