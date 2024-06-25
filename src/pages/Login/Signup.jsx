import React, { useState } from 'react';
import './Login.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import { FaGoogle } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../components/firebase.js';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          Name: username
        });
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className='formWrap'>
        <div className="form-container">
          <h2>Signup</h2>
          {error && <p className='error-message'>{error}</p>}
          <form onSubmit={handleSignUp}>
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
              <button type="submit" className="form-button">Signup</button>
              <button className='google'><FaGoogle /> Signup with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
