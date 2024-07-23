import React, { useEffect } from "react";
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
import { Provider, useDispatch } from "react-redux";
import store from "./store/store.ts";
import { LoginPage } from "./components/LoginPage/LoginPage.tsx";
import { RegisterPage } from "./components/RegisterPage/RegisterPage.tsx";
import { Message } from "./components/Message/Message.tsx";
import { client } from "./supabase.ts";
import { loginUser } from "./Slices/userState/userState.ts";

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
  { path: "register-page", element: <RegisterPage /> },
  { path: "message", element: <Message /> },
]);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshSession = async () => {
      const {
        data: { user },
      } = await client.auth.getUser();
      if (user) {
        dispatch(loginUser({ id: user.id, userName: user.email }));
      }
    };
    refreshSession();

    setInterval(refreshSession, 1000 * 60 * 5);
  }, [dispatch]);

  return children;
};
export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SessionProvider>
            <RouterProvider router={router} />
          </SessionProvider>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
