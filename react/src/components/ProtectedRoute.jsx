import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn) {
    return (
      <main style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px 20px", minHeight: "100%" }}>
        <div className="professional-card" style={{ padding: "40px", textAlign: "center" }}>
          <h2 style={{ color: "#1e3c72", marginBottom: "20px" }}>Login Required</h2>
          <p style={{ color: "#666", marginBottom: "30px" }}>Please log in to view products and make purchases.</p>
          <a href="/login" style={{ textDecoration: "none" }}>
            <button style={{ padding: "12px 30px", fontSize: "1rem" }}>
              GO TO LOGIN
            </button>
          </a>
        </div>
      </main>
    );
  }
  
  return children;
}

export default ProtectedRoute;