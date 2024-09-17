import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./routes";
import { AuthProvider } from "./provider";

const dirElement = document.getElementById("root");

const root = createRoot(dirElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>,
);
