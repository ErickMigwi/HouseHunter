import React, {useState} from 'react'

function Login() {
  //States
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  //Funtions
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const loginAgent = ()=>{
    //Add your check auth here 
    console.log(password, email);
  }
  return (
    <div id='login'>
      <div id='mainSignUp'>
      <h3>Login To Your Account</h3>
        <p>Email</p>
        <input type="email" value={email} onChange={handleEmailChange} />
        <p>Password</p>
        <input type="password" value={password} onChange={handlePasswordChange} />
    </div>
    <button id='btn' onClick={loginAgent}>Login</button>
    </div>
    
  )
}

export default Login
