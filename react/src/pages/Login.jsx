import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);
    if (success) {
      navigate('/');
    } else {
      setError('Please enter valid email and password');
    }
  };

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px 20px", minHeight: "100%" }}>
      <div className="professional-card" style={{ padding: "40px", maxWidth: "400px", width: "100%" }}>
        <h2 style={{ color: "#1e3c72", textAlign: "center", marginBottom: "30px" }}>Login to PlushWorld</h2>
        
        {error && (
          <div style={{ background: "#f8d7da", color: "#721c24", padding: "10px", borderRadius: "5px", marginBottom: "20px", textAlign: "center" }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} 
            />
          </div>
          
          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} 
            />
          </div>
          
          <button type="submit" style={{ width: "100%", padding: "12px", fontSize: "1rem" }}>
            LOGIN
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;