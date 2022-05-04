import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="nav d-flex justify-content-center p-2">
        <h1>
          <Link to="/" className="top-nav">
            NJ Auth
          </Link>
        </h1>
      </div>
    </>
  );
};

export default TopNav;
