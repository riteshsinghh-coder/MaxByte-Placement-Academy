// pages/forgot-password.js

import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    
    // Here you would implement your email verification logic
    // This is a mock response for demonstration purposes
    const mockResponse = true; // Simulate email sent successfully

    if (mockResponse) {
      setMessage('A password reset link has been sent to your email.');
    } else {
      setMessage('Error sending email. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">Forgot Password</h1>
      <form onSubmit={handleReset} className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Enter your email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
