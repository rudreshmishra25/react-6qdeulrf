import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
    const navigate = useNavigate()

    const handleSubmit =(e)=>{ 
        e.preventDefault()
        navigate("/")
    }

  return (
    <div className="text-center mt-5">
      <h1>Welcome to Dashboard</h1>
      <p>You have successfully logged in!</p>

      <button onClick={handleSubmit} className=' btn btn-danger mx-auto' style={{padding:'10',margin:'10',width:'150'}}>Log Out</button>
    </div>
  );
}
