import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.jsx'
import google from '../../Assets/google.png';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../components/firebase.js'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully");
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
      setError(error.message); 
    }
  };

  return (
    <div>
      <NavBar/>
      <div className='formWrap'>
        <div className="form-container">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
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
            <div className='bttns'>
              <button type="submit" className="form-button">Login</button>
              <p>Or Login with</p>
               <img src={google} alt="" className='google' />
            </div>
            <Link to='/signup'>  <p className='signUp'>SignUp</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
