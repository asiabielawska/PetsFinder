import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../supabase";

export const useAuth = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await client.auth.getUser();
      if (!user) {
        navigate("/login-page");
      }
    };
    checkUser();
  }, [navigate]);
};
