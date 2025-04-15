import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUpForm from './UserSignUpForm';
import Navbar from './Navbar.js';

export default function App() {
  return (
    <div>
      <Navbar />
      <UserSignUpForm />
      <div className="container"></div>
    </div>
  );
}
