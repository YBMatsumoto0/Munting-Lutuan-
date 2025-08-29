import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
