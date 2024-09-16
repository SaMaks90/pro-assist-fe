import React from "react";
import { AuthProvider } from "./provider";
import { Routes } from "./routes";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export { App };
