import { createMuiTheme } from "@material-ui/core/styles";
//https://material-ui.com/customization/default-theme/
//const base = createMuiTheme();

const background = { default: "#fff", paper: "#faf5f5" };

//const lightblue = {main: "#", dark: "#", light: "#", contrast: "#"}
const blue = {
  main: "#0b1c85",
  dark: "#001072",
  light: "#485395",
  contrastText: "#fff",
};
const red = {
  main: "#e5395a",
  dark: "#c71c3c",
  light: "#dc7185",
  contrastText: "#fff",
};
const lightblue = {
  main: "#1d6fbb",
  dark: "#0758a4",
  light: "#5a8dbc",
  contrastText: "#000",
};

const theme = createMuiTheme({
  palette: {
    background: background,
    primary: blue,
    secondary: red,
    info: lightblue,
  },
  typography: {
    fontFamily: ['"Work Sans"', "sans-serif"].join(","),
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
  },
});

export default theme;
