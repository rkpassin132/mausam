import * as React from "react";
import { Box, Grid, Stack, Typography, Divider } from "@mui/material";

function TodayForcastItem() {
  return (
    <>
      <Grid item width="100px">
        <Stack
          style={{ alignItems: "center", justifyContent: "center" }}
          spacing={1}
        >
          <Typography
            marginTop={0}
            color="#9fa4ac"
            variant="span"
            fontWeight="600"
            component="span"
            fontSize="14px"
          >
            6:00 AM
          </Typography>
          <Box
            component="img"
            sx={{
              width: { xs: "50px", sm: "60px" },
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              margin: "auto",
            }}
            alt="weather"
            src={
              "https://w7.pngwing.com/pngs/197/886/png-transparent-art-ultraviolet-icon-cartoon-sun-cartoon-character-orange-sunflower.png"
            }
          />
          <Typography
            variant="h4"
            fontWeight="600"
            component="h4"
            fontSize="18px"
          >
            30 °C
          </Typography>
        </Stack>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
    </>
  );
}

export default TodayForcastItem;
