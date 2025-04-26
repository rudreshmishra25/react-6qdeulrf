import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailRegex from './EmailRegex';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password,setPassword]= useState(
  )
  
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email input value on change
  };

  const handleSubmit = (e)=>{
    if (!email || !password) {
      alert('Please fill in both email and password');
      return;
    }
    e.preventDefault()
    navigate('/dashboard')
    console.log(
      "submit SuccesFull"
    )
  }
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1467781.jpg)`, // Full-page background image
        backgroundSize: 'cover', // Ensures the image covers the entire page
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        // minHeight: '100vh',
        height: '100vh',
      }}
    >
<div
  className="card w-50 mt-0 mx-auto"
  style={{
    backgroundImage: `url(https://wallpaperaccess.com/full/1467781.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height:'60%'
  }}
>
  <div className="card-body d-flex flex-column align-items-center " style={{marginTop:'50'}}>
    <h5
      className="card-title text-center mb-4"
      style={{ fontWeight: 'bold', color: 'white' }}
    >
      Sign In
    </h5>

    <div className="w-50 mx-5">
      <label
        style={{ fontWeight: 'bold', color: 'white' }}
        className="p-2 text-center w-100"
      >
        Email
      </label>
      <input
        placeholder="email@example.com"
        className="form-control"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <EmailRegex email={email} />
    </div>

    <div className="w-50 mb-3">
      <label
        style={{ fontWeight: 'bold', color: 'white' }}
        className="p-2 text-center w-100"
      >
        Password
      </label>
      <input
        placeholder="password"
        className="form-control"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>

    <button onClick={handleSubmit}
    className="btn btn-primary w-45 mt-3">Submit</button>
  </div>
</div>

    </div>
  );
}
