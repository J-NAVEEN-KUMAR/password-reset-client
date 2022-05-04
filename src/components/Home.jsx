import React from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import welcomeLottie from "./welcomeLottie.json";

const Home = () => {
  //Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 110,
    width: 200,
  };
  const { View } = useLottie(defaultOptions, mod);
  return (
    <>
      <div className="container-fluid text-center">
        <h3>Hey there! Welcome to NJ Auth.</h3>
        <h6>
          You can register, login and reset your password through email
          verification.
        </h6>
        <br />
        <p className="continer-fluid alert alert-info" >
          Note: Please register with valid email.
        </p>
        <br />
        <div className="home-card">
          <div
            className="card text-center home-card-bg p-2"
            style={{ width: "50rem" }}
          >
            <h4 className="card-title">
              New here! Register with us and explore!
            </h4>
            <div>
              <h2>{View}</h2>
            </div>
            <div className="card-body">
              <h6>Click here to register! </h6>
              <Link className="nav-link" to="/register">
                <button className="btn btn-primary">Register</button>
              </Link>
              <h6>Already registered! Click Login button to proceed.</h6>
              <Link className="nav-link" to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
