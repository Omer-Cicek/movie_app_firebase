import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { signIn, signUpProvider } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
    setEmail('');
    setPassword('');
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className="d-flex justify-content-center ">
      <div className="form-image ">
        <img src="https://picsum.photos/800/800" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >
          <FcGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
