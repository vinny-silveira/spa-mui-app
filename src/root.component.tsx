import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import App from "./app";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default function Root(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
