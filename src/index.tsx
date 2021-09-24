import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import Providers from "providers";
import GlobalStyle from "styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Providers>
          <GlobalStyle />
          <Routes />
        </Providers>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
