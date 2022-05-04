import { Link } from "react-router-dom";

const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => (
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
    <button disabled={!email || !password} className="btn btn-primary m-3">
      Login
    </button>
    <br />

    <span className="d-flex justify-content-center align-items-center">
      Forgot Password? <br />
      <Link to="/forgot-password">
        <button className="btn btn-warning m-2">Change here!</button>
      </Link>
    </span>
    <span className="d-flex justify-content-center align-items-center">
      New here! <Link to="/register"> register</Link>
    </span>
    <br />
  </form>
);

export default LoginForm;
