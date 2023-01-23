import { createTheme, useMediaQuery } from "@mui/material";
import React from "react";

export const theme = Object.freeze({
  colors: {
    grey: 'lightgrey',
    white: '#fff',
    black: '#0d0a0a',
    blue: '#2196f3',
    accent: '#992895',
    red: '#eb0c26',
    green: '#14c726',
    background: '#8678979f',
  },
  spacing: value => `${4 * value}px`,
  Themes
});




function Themes() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )
  theme()
}