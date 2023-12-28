import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginLogoutFunctions = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );
      const { data } = await axios.post("https://generette.onrender.com/auth", {
        email: res.data.email,
      });
      let userData = data && data.email ? data : res.data;
      localStorage.setItem("userdata", JSON.stringify(userData));
      window.location.reload();
    },
  });

  const logout = () => {
    localStorage.removeItem("userdata");
    window.location.reload();
  };
  return { login, logout };
};
export default LoginLogoutFunctions;
