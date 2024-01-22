import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { PetProfile } from "./components/PetProfile/PetProfile.tsx";
import { UserProfile } from "./components/UserProfile/UserProfile.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  { path: "pet-profile", element: <PetProfile /> },
  { path: "user-profile", element: <UserProfile /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
