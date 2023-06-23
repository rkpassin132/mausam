import React from "react";
import { Container } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherDetail from "../components/WeatherDetail";

function WeatherApp() {
  return (
    <Container
      sx={{
        maxWidth: { xs: "95%", sm: "95%", md: "90%" },
        margin: "0 auto",
        padding: "1rem 0 3rem",
      }}
    >
      <Header />
      <SearchBar />
      <WeatherDetail />
    </Container>
  );
}

export default WeatherApp;
