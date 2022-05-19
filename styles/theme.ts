import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Archivo",
    allVariants: {
      fontFamily: "Montserrat",
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
  },
});

export default theme;
