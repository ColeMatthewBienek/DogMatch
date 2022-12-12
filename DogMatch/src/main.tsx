import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApplicationContext } from "./contexts/AppContext";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationContext>
        <App />
      </ApplicationContext>
    </BrowserRouter>
  </React.StrictMode>
);
