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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WeatherApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
