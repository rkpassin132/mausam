import React from "react";
import { Box, Grid } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      padding={5}
    >
      <Box
        component="img"
        className="footer-image"
        sx={{
          height: "90px",
          width: "auto",
          filter:"invert(1)"
        }}
        alt="logo"
        src="https://rkpassin132.github.io/src/assets/images/signature-logo.png"
      />
    </Grid>
  );
}

export default Footer;
