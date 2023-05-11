import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from './App'
import AppWithYup from "./App_with_yup";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/*<App />*/}
    <AppWithYup />
  </StrictMode>
);
