import { createTheme } from "@mui/material";
import { baseTypographyOptions } from "./Typography";
import { useMemo, useState } from "react";

export const lightTheme = createTheme({
  typography: baseTypographyOptions,
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const useThemeHook = () => {
  const [theme, setTheme] = useState(lightTheme);
  const palette = theme.palette;

  const colorMode = useMemo(
    () => (theme: ThemeTypes) => setTheme(lightTheme),
    []
  );

  return {
    theme,
    palette,
    colorMode,
  };
};
