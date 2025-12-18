import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let result;
    if (showRegister) {
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        setLoading(false);
        return;
      }
      result = await register(formData.name, formData.email, formData.password);
    } else {
      result = await login(formData.email, formData.password);
    }
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message || `${showRegister ? 'Registration' : 'Login'} failed. Please try again.`);
    }
    
    setLoading(false);
  };

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px 20px", minHeight: "100%" }}>
      <div className="professional-card" style={{ padding: "40px", maxWidth: "400px", width: "100%" }}>
        <h2 style={{ color: "#1e3c72", textAlign: "center", marginBottom: "30px" }}>
          {showRegister ? 'Join PlushWorld' : 'Login to PlushWorld'}
        </h2>
        
        {error && (
          <div style={{ background: "#f8d7da", color: "#721c24", padding: "10px", borderRadius: "5px", marginBottom: "20px", textAlign: "center" }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {showRegister && (
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={showRegister}
                style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} 
              />
            </div>
          )}
          
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
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              width: "100%", 
              padding: "12px", 
              fontSize: "1rem",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? (showRegister ? 'CREATING ACCOUNT...' : 'LOGGING IN...') : (showRegister ? 'CREATE ACCOUNT' : 'LOGIN')}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
          {showRegister ? 'Already have an account?' : "Don't have an account?"} 
          <button 
            onClick={() => {
              setShowRegister(!showRegister);
              setError('');
              setFormData({ name: '', email: '', password: '' });
            }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#1e3c72', 
              textDecoration: 'underline', 
              cursor: 'pointer',
              marginLeft: '5px'
            }}
          >
            {showRegister ? 'Login here' : 'Sign up here'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;