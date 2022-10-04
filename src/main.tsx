import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BuilderProvider from "./builder/builder/components/BuilderProvider";
import AsssetProvider from "./builder/assets/context/AssetsProvier";
import Assets from "./components/assets";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BuilderProvider tree={{}}>
      <AsssetProvider assets={Assets}>
        <App />
      </AsssetProvider>
    </BuilderProvider>
  </React.StrictMode>
);
