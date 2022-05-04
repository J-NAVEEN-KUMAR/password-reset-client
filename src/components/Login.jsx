import React, { useState } from "react";
import LoginForm from "./forms/LoginForm";
import { useLottie } from "lottie-react";
import loginLottie from "./loginLottie.json";
import { toast } from "react-toastify";
import { login } from "./actions/Auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login({ email, password });
      console.log(res);
      if (res.data) {
        //"SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===>"

        //save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        //save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        navigate.push("/dashboard");
        toast.success("Congo! Login successful...!", {
          icon: "🚀",
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };

  //Lottie animation
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 500,
    width: 500,
  };
  const { View } = useLottie(defaultOptions, mod);

  return (
    <>
      <div className="container-fluid p-5 text-center">
        <h4>Hey! You are one step away. Login here.</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="col">{View}</div>
        </div>
      </div>
    </>
  );
};

export default Login;
