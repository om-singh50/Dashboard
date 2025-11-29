import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";

import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";

function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);
  const theme = mode === "dark" ? darkTheme : lightTheme;

  // Sync theme colors → CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
