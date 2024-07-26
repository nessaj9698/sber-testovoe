import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import { mockServer } from "../mock-server/index.ts";
import { Router } from "app/router/router.tsx";
import { AppStyles } from "app/styles/global-styles.tsx";

const renderApp = () => {
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <AppStyles />
        <Router />
      </Provider>
    </React.StrictMode>
  );
};

mockServer().then(() => renderApp());
