import React, { useState } from 'react';
import './App.css';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (e) => { // Use async/await for potential API calls
    e.preventDefault();

    // Basic validation (can be extended with regular expressions)
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter your email and password.');
      return; // Return early if validation fails
    }

    try {
      // Replace with your actual authentication logic
      // (likely involving a POST request to your backend API)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }), // Send credentials in a secure way
      });

      if (!response.ok) {
        // Handle failed login attempts (e.g., display an error message)
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed.'); // Use specific error message if available
      } else {
        // Login successful handling (e.g., redirect to protected area)
        console.log('Login successful!');
        // Handle successful login based on your application logic
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }

    // Clear form fields after successful or failed login (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-card">    
      <img src="/logo.svg" alt="Logo" className="logo" />  
        <h2 className="login-title">Iniciar sesión</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          
         
          <div className="form-group">
            
            <label htmlFor="email">Correo electrónico: </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña: </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && ( // Conditionally render error message
            <div className="error-message">{errorMessage}</div>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;