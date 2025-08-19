import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "@/App";
import "@/index.css";

const root = document.getElementById("root")!;

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
