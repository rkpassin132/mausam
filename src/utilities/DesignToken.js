import { grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: {
                default: "#fdfdfd",
                paper: "#f5f5f5",
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: grey,
            divider: grey[700],
            background: {
              default: "#0b131e",
              paper: "#202b3b",
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

  export default getDesignTokens;