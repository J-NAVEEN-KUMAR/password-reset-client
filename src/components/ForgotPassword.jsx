import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { forgotPassword } from "./actions/Auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(email);
      let res = await forgotPassword({email})
      console.log(res);
      if(res.data) {
        toast.success(res.data)
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };
  return (
    <>
      <h4 className="text-center">
        Hey! Enter your email and submit. The password reset link will be sent
        to your email.
      </h4>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group m-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" disabled={!email} className="btn btn-primary m-3">
          Submit
        </button>
        <br />
        <Link to="/" className="m-2">
          Back to Home page
        </Link>
      </form>
    </>
  );
};

export default ForgotPassword;
