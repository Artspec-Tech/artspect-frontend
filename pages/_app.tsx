import "../styles/globals.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppPropsWithLayout } from "types";
import { ReactElement } from "react";
import store from "store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
