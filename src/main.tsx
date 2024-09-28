import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TaskContextProvider } from "./store/index.tsx";

createRoot(document.getElementById("root")!).render(
  <TaskContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TaskContextProvider>
);
