import React, { useState } from 'react';
import './Login.css';
import NavBar from '../../components/NavBar/NavBar.jsx'
import { FaGoogle } from 'react-icons/fa';





const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div>
      <NavBar/>
    <div className='formWrap'>
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
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
        <div className='bttns'>
        <button type="submit" className="form-button" >Signup</button>
        <button className='google'><FaGoogle /> Signup with Google</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;
