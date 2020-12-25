import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { authenticate } from "../../utils/api";
import { useInput, useTracking } from "../../hooks";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const { trackUserLoginError, trackUserLoginSuccess } = useTracking();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    authenticate({ email, password })
      .then(() => {
        trackUserLoginSuccess({ email });
        setSuccess(true);
      })
      .catch(({ message }) => {
        trackUserLoginError();
        setError(message);
      })
      .finally(() => setLoading(false));
  };
  if (success && !loading) return <Redirect to="/" />;
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Log in to your account</h1>
      <div className="signup-urls-container">
        <Link to="/auth/forgot-password">Don't have an account yet? Sign up</Link>
      </div>
      <div className="auth-input-container">
        <div className="input-container">
          <input
            className="input"
            id="email"
            name="email"
            onChange={setEmail}
            required
            type="email"
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            id="password"
            name="password"
            onChange={setPassword}
            required
            type="password"
            value={password}
            placeholder="Password"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-blue">
        <span>Log in</span>
      </button>
      <div className="urls-container">
        <Link to="/auth/forgot-password">Forgot password?</Link>
      </div>
    </form>
  );
};

export default Login;
