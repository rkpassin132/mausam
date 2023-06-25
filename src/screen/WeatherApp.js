import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/Search/SearchBar";
import WeatherDetail from "../components/WeatherDetail";
import { transformDateFormat } from "../utilities/DatetimeUtils";
import { fetchWeatherData } from "../service/OpenWeatherService";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "../utilities/DataUtils";
import { ALL_DESCRIPTIONS } from "../utilities/DateConstants";
import LoadingBox from "../components/Reusable/LoadingBox";
import ErrorBox from "../components/Reusable/ErrorBox";
import DefalutWeatherUi from "../components/DefalutWeatherUi";
import Footer from "../components/Footer";

function WeatherApp({ themeMode, setThemeMode }) {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchChangeCity = async (enteredData) => {
    const [latitude, longitude] = enteredData.split(" ");

    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);

      console.log(todayWeatherResponse, weekForecastResponse);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Container
        sx={{
          maxWidth: { xs: "95%", sm: "95%", md: "80%" },
          margin: "0 auto",
          padding: "1rem 0 3rem",
        }}
      >
        <Header />
        <SearchBar
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          searchChangeCity={searchChangeCity}
        />
        {isLoading && <LoadingBox />}
        {error && (
          <ErrorBox
            title="Something went wrong"
            message="Please try after sometime"
          />
        )}
        {todayWeather && todayForecast && weekForecast ? (
          <WeatherDetail
            todayWeather={todayWeather}
            todayForecast={todayForecast}
            weekForecast={weekForecast}
          />
        ) : (
          <DefalutWeatherUi />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default WeatherApp;
