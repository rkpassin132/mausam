import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import getDesignTokens from "./utilities/DesignToken";
import WeatherApp from "./screen/WeatherApp";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const changeTheme = () => {
    var bg = document.querySelector("#root").style;
    var footerImage = document.querySelector(".footer-image").style;
    if (mode === "dark") {
      bg.setProperty("--backgroundFilter", "invert(100%)");
      footerImage.setProperty("filter", "none");
    } else {
      bg.setProperty("--backgroundFilter", "none");
      footerImage.setProperty("filter", "invert(1)");
    }
    colorMode.toggleColorMode();
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WeatherApp themeMode={mode} setThemeMode={changeTheme} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
