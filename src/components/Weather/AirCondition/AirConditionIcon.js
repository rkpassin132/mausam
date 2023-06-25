import * as React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { ReactComponent as HumidityIcon } from "../../../assets/humidity.svg";
import { SvgIcon } from "@mui/material";

function AirConditionIcon({ type, iconStyle }) {
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
}

export default AirConditionIcon;
