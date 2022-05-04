import React, { useState } from "react";
import RegisterForm from "./forms/RegisterForm";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useLottie } from "lottie-react";
import registerLottie from "./registerlottie.json";
import { register } from "./actions/Auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });
      navigate.push("/login");
      toast.success(
        "Registration successful ...! Please verify your Email before logging in.",
        {
          icon: "🚀",
        }
      );
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };

  //Lottie animation
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: registerLottie,
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
        <h4>Hey! Register with your details and verify your email.</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="col">
            <div>{View}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
