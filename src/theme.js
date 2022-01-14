import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    name: "light",
    body: '#E2E2E2',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    primary: '#5D9CEC',
    secondary: '#4D85E4',
});
  
export const darkTheme = createTheme({
    name: "dark",
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    primary: '#74EBD5',
    secondary: '#66CCEE',
});