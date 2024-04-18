import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./components/HomePage/HomePage.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { PetProfile } from "./components/PetProfile/PetProfile.tsx";
import { UserProfile } from "./components/UserProfile/UserProfile.tsx";
import { Form } from "./components/Form/Form.tsx";
import { Liked } from "./components/Liked/Liked.tsx";
import { Messages } from "./components/Messages/Messages.tsx";
import { Layout } from "./components/Layout.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { LoginPage } from "./components/LoginPage/LoginPage.tsx";

const router = createHashRouter([
  {
    path: "",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "pet-profile",
    element: <PetProfile />,
  },
  {
    path: "user-profile",
    element: (
      <Layout>
        <UserProfile />
      </Layout>
    ),
  },
  { path: "form", element: <Form /> },
  {
    path: "liked",
    element: (
      <Layout>
        <Liked />
      </Layout>
    ),
  },
  {
    path: "messages",
    element: (
      <Layout>
        <Messages />
      </Layout>
    ),
  },
  { path: "login-page", element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
