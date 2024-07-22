import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchParamsProvider } from "./lib/context/SearchParamProvider/SearchParamProvider";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SearchParamsProvider>
      <App />
    </SearchParamsProvider>
  </React.StrictMode>
);
