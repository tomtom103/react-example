import React from "react";
import { lightTheme } from "../../theme";
import { AppNavbar, Sidebar } from "../../components"
import { Box, ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ display: 'flex' }}>
        <AppNavbar />
        <Sidebar />
      </Box>
    </ThemeProvider>
  );
};

export default App;
