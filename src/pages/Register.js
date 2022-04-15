import React, { useState } from 'react';
import { createUser } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
    console.log(firstName, lastName, email);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src="https://picsum.photos/800/800" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="form-control"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="form-control"
            id="last-name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
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
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
