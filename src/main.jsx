import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import { BrowserRouter } from "react-router-dom";

const theme = responsiveFontSizes(createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#b57841',
        },
        secondary: {
            main: '#4c84ad',
        },
        background: {
            default: '#ccd5ae',
            paper: '#e9edc9',
        },
    },
}));

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
