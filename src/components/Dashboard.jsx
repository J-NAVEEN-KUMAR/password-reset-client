import React from "react";
import { useLottie } from "lottie-react";
import dashboardLottie from "./dashboardLottie.json";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  //Lottie animation
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: dashboardLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 500,
    width: 500,
  };
  const { View } = useLottie(defaultOptions, mod);

  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6">{View}</div>
          <div className="col-md-6">
            <h1>Hey there! Welcome!</h1>
            <h3>
              I am Naveen Kumar J! I am a passionate Web Developer who gets joy
              in building customer ready applications providing seamless
              experience.
            </h3>
            <h4>
              If you want to know more about my other works.You can checkout my
              portfolio.
            </h4>
            <h5>
              <a
                href="https://naveen-kumar-j-portfolio.netlify.app/"
                class="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                My portfolio
              </a>
            </h5>
            <h6>
              <button className="btn btn-warning mt-1" onClick={handleClick}>
                Logout
              </button>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
