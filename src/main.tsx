import { createRoot } from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";
import "./styles/input.css";
import "./styles/swipperCostum.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
