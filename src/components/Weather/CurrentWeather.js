import * as React from "react";
import { Grid, Stack, Container, Typography, Box } from "@mui/material";

function CurrentWeather(props) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4" fontWeight="600" component="h4" fontSize="28px">
                New delhi
              </Typography>
              <Typography
                marginTop={0}
                color="#747b86"
                variant="span"
                fontWeight="600"
                component="span"
                fontSize="14px"
              >
                Chance of rain : 0%
              </Typography>
            </div>
            <div>
              <Typography variant="h3" fontWeight="600" component="h3" fontSize="48px">
                30 °C
              </Typography>
              <Typography
                marginTop={0}
                color="#747b86"
                variant="span"
                fontWeight="600"
                component="span"
                fontSize="14px"
              >
                Clear sky
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={4} margin="auto">
          <Box
            component="img"
            sx={{
              width: { xs: "50px", sm: "60px" },
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              margin: "0 auto",
              padding: "0",
            }}
            alt="weather"
            src={"https://w7.pngwing.com/pngs/197/886/png-transparent-art-ultraviolet-icon-cartoon-sun-cartoon-character-orange-sunflower.png"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CurrentWeather;
