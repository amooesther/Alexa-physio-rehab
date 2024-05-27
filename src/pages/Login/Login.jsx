import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.jsx'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      <NavBar/>
    <div className='formWrap'>
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="form-button">Login</button>
      <Link to='/signup'>  <p className='signUp'>SignUp</p></Link>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
