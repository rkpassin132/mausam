import React from "react";
import Logo from '../assets/logo192.png';
import { Box, Grid, Link } from "@mui/material";
import UTCDatetime from "./Reusable/UTCDatetime";
import { GitHub } from "@mui/icons-material";

function Header() {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: "16px", sm: "22px", md: "26px" },
              width: "auto",
            }}
            alt="logo"
            src={Logo}
          />

          <UTCDatetime />
          <Link
            href="https://github.com/rkpassin132"
            target="_blank"
            underline="none"
            sx={{ display: "flex" }}
          >
            <GitHub
              sx={{
                fontSize: { xs: "20px", sm: "22px", md: "26px" },
                "&:hover": { color: "#2d95bd" },
              }}
            />
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
