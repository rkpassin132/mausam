import * as React from "react";
import { Alert, AlertTitle } from "@mui/material";

export default function ErrorBox({ title, message }) {
  return (
    <Alert style={{marginTop:"40px", background:"#dc294140"}} variant="outlined"  severity="error">
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}
