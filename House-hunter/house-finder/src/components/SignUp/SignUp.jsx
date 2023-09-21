import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  // States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  // Event handlers to update state
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  
 const createAgent= ()=>{
  //Add Your Axios post req here
    console.log(email, password, location, username);
 }
  return (
  <div>

    <div id='mainSignUp'>
      <h3>Create Account</h3>
      
        <p>Username</p>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <p>Email</p>
        <input type="email" value={email} onChange={handleEmailChange} />
        <p>Location</p>
        <input type="text" value={location} onChange={handleLocationChange} />
        <p>Password</p>
        <input type="password" value={password} onChange={handlePasswordChange} />
    </div>
    <button id='btn' onClick={createAgent}>Create Account</button>
    </div>
  );
};

export default SignUp;
