import { createMuiTheme } from "@material-ui/core/styles";
//https://material-ui.com/customization/default-theme/
//const base = createMuiTheme();

//https://www.canva.com/learn/website-color-schemes/
//35 Cool Jewel tones

const bluetopazlight = "#72c1e0";
const bluetopaz = "#67aeca"; //bluetopaz
const bluetopazdark = "#60a3bd";

const amethystlight = "#715e8f";
const amethyst = "#675682"; //amethyst
const amethystdark = "#534569";

const jewellight = "#7a1264";
const jewel = "#5f0f4e"; //jewel
const jeweldark = "#470b3b";

const roselight = "#fa2d79";
const rose = "#e52a6f"; //rose
const rosedark = "#c92461";

//

const c1 = "#dcae1d"; //honey
const c2 = "#7a9d96"; //mist
const c3 = "#cae4db"; //morning sky
const c4 = "#00303f"; //cerulean

const c5 = "#99d3df"; //ice
const c6 = "#88bbd6"; //fresh water
const c7 = "#cdcdcd"; //plaster
const c8 = "#e9e9e9"; //linen

const bgcolor = "#EEF8F8";

const ksbluelight = "#3548b0";
const ksblue = "#283583";
const ksbluedark = "#243075";
const ksred = "#FF3F63";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: ksbluedark,
      main: ksblue,
      dark: ksbluelight,
      contrastText: "#fff",
    },
    secondary: {
      light: c5,
      main: c5,
      dark: c5,
      contrastText: "#000",
    },
    info: {
      light: c7,
      main: c7,
      dark: c7,
      contrastText: "#000",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#4caf50",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    background: {
      default: "#EEF8FF",
      paper: "#fafafa",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: ['"Work Sans"', "sans-serif"].join(","),
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
});

export default theme;
