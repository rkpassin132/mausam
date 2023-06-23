import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function LoadingBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "500px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <CircularProgress sx={{ color: "rgba(255,255,255, .8)" }} />

        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: "10px", sm: "12px" },
            color: "rgba(255, 255, 255, .8)",
            lineHeight: 1,
            fontFamily: "Poppins",
          }}
        >
          Loading...
        </Typography>
      </Box>
    </Box>
  );
}
