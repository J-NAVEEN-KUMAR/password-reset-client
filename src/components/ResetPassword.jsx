import React, { useState } from "react";
import { toast } from "react-toastify";
import { resetPassword } from "./actions/Auth";
import { useHistory, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  let { resetLink } = useParams();
  const history = useHistory();
  // console.log(resetLink);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(resetLink);
      let res = await resetPassword({ password, resetLink });
      // console.log(res);
      if (res.data) {
        toast.success(res.data);
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };
  return (
    <>
      <>
        <h4 className="text-center">
          Hey! One step away to change the password. Enter the password and
          submit.
        </h4>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="form-group m-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button disabled={!password} className="btn btn-primary m-3">
            Submit
          </button>
        </form>
      </>
    </>
  );
};

export default ResetPassword;
