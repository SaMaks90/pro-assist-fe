import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

const dirElement = document.getElementById("root");

const root = createRoot(dirElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
