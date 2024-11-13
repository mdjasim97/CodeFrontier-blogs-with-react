import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/router.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    ></RouterProvider>
    <Toaster />
  </StrictMode>
);
