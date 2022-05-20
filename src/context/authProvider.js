import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInServices, signUpServices, logOutServices } from "../services";
import toast from "react-hot-toast";

const AuthContext = createContext();
const token = JSON.parse(localStorage.getItem("auth_token"));
const userName = JSON.parse(localStorage.getItem("user_name"));
const email = JSON.parse(localStorage.getItem("email"));

const inititalAuthStateValue = {
  loginStatus: token ? true : false,
  authenticationToken: token,
  userName: userName,
  email: email
};

const AuthProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState(inititalAuthStateValue);

  const signUpHandler = async (signUpData) => {
    const { data, status } = await signUpServices(signUpData);
    if (status === 201) {
      localStorage.setItem("auth_token", JSON.stringify(data.encodedToken));
      localStorage.setItem(
        "user_name",
        JSON.stringify(data.createdUser.firstName)
      );
      localStorage.setItem("email", JSON.stringify(data.createdUser.email));
      setUser({
        loginStatus: true,
        authenticationToken: data.encodedToken,
        userName: data.createdUser.firstName,
        email: data.createdUser.email
      });
      navigateTo("/");
    }
  };

  const logInHandler = async (logInData) => {
    console.log(logInData);
    if (logInData.email === "" && logInData.password === "") {
      toast("fill the fields", { icon: "✔️" });
    } else {
      const { data, status } = await logInServices(logInData);
      if (status === 200) {
        localStorage.setItem("auth_token", JSON.stringify(data.encodedToken));
        localStorage.setItem(
          "user_name",
          JSON.stringify(data.foundUser.firstName)
        );
        localStorage.setItem("email", JSON.stringify(data.foundUser.email));
        setUser({
          loginStatus: true,
          authenticationToken: data.encodedToken,
          userName: data.foundUser.firstName,
          email: data.foundUser.email
        });
        toast("Successfully loggedIn", { icon: "✔️" });

        navigateTo("/");
      } else {
        toast("could not complete the request");
      }
    }
  };

  const logOutHandler = () => {
    logOutServices();
    setUser({ loginStatus: false });
    toast("Logged out successfully", { icon: "✔️" });
    navigateTo("/");
  };

  return (
    <AuthContext.Provider
      value={{ signUpHandler, logInHandler, logOutHandler, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
