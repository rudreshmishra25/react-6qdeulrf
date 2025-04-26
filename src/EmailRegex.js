import React from 'react';
export default function EmailRegex({ email }) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  return (
    <div>
      {email && !isValidEmail && (
        <p style={{ color: 'red' }}>Please enter a valid email address.</p>
      )}
    </div>
  );
}
