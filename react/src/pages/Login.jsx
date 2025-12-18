import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
  };

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px 20px", minHeight: "100%" }}>
      <div className="professional-card" style={{ padding: "40px", maxWidth: "400px", width: "100%" }}>
        <h2 style={{ color: "#1e3c72", textAlign: "center", marginBottom: "30px" }}>
          Login to PlushWorld
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} 
            />
          </div>
          
          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} 
            />
          </div>
          
          <button 
            type="submit" 
            style={{ width: "100%", padding: "12px", fontSize: "1rem" }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;