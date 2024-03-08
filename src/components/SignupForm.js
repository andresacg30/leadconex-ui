import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() {
  const [agencyName, setAgencyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Agency Name:', agencyName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setAgencyName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-form">
      <h2>Agency Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="agencyName">Agency Name</label>
          <input
            type="text"
            id="agencyName"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;