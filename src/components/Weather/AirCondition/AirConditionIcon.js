import * as React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { ReactComponent as HumidityIcon } from "../../../assets/humidity.svg";
import { Box, SvgIcon } from "@mui/material";

function AirConditionIcon({ type, iconStyle, src }) {
  if (type === "temperature")
    return <ThermostatIcon sx={{ fontSize: "22px", color: "#9fa4ac", ...iconStyle }} />;
  else if (type === "wind")
    return <AirIcon sx={{ fontSize: "22px", color: "#9fa4ac", ...iconStyle }} />;
  else if (type === "clouds")
    return <FilterDramaIcon sx={{ fontSize: "22px", color: "#9fa4ac", ...iconStyle }} />;
  else if (type === "humidity")
    return (
      <SvgIcon
        component={HumidityIcon}
        inheritViewBox
        sx={{ fontSize: "22px", color: "#9fa4ac", ...iconStyle }}
      />
    );
  else if(type === "img"){
    return ( <Box
      component="img"
      sx={{
        width: { xs: "26px", sm: "28px" },
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: "0 auto",
        padding: "0",
      }}
      alt="weather"
      src={src}
    />)
  }
}

export default AirConditionIcon;
