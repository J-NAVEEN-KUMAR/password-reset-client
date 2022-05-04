import { Link } from "react-router-dom";

const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group m-3">
        <label className="form-label ">Your Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <div className="form-group m-3">
        <label className="form-label">Enter Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        disabled={!email || !password || !name}
        className="btn btn-primary m-3"
      >
        Register
      </button>
      <br />
      <span className="d-flex justify-content-center align-items-center">
        Already have a account. <Link to="/login">Login here</Link>
      </span>
      <span className="d-flex justify-content-center align-items-center">
        Forgot Password? <br />
        <Link to="/forgot-password">
          <button className="btn btn-warning m-2">Change here!</button>
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;
