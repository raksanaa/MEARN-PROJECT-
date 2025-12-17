import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { getCartCount } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  
  return (
    <header style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)", color: "white", padding: "20px 40px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", borderBottom: "3px solid #7C3AED" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "700", color: "white", display: "flex", alignItems: "center", gap: "10px" }}>🧸 PlushWorld</h1>
        <nav style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "1rem", fontWeight: "600", padding: "8px 0", borderBottom: "2px solid transparent", transition: "all 0.3s ease" }} onMouseEnter={(e) => e.target.style.borderBottom = "2px solid white"} onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}>HOME</Link>
          <Link to="/products" style={{ color: "white", textDecoration: "none", fontSize: "1rem", fontWeight: "600", padding: "8px 0", borderBottom: "2px solid transparent", transition: "all 0.3s ease" }} onMouseEnter={(e) => e.target.style.borderBottom = "2px solid white"} onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}>PRODUCTS</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "1rem", fontWeight: "600", padding: "8px 0", borderBottom: "2px solid transparent", transition: "all 0.3s ease" }} onMouseEnter={(e) => e.target.style.borderBottom = "2px solid white"} onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}>ABOUT</Link>
          <Link to="/cart" style={{ color: "white", textDecoration: "none", fontSize: "1rem", fontWeight: "600", padding: "8px 15px", borderBottom: "2px solid transparent", transition: "all 0.3s ease", position: "relative" }} onMouseEnter={(e) => e.target.style.borderBottom = "2px solid white"} onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}>CART {getCartCount() > 0 && <span style={{ background: "white", color: "#8B5CF6", borderRadius: "50%", padding: "2px 6px", fontSize: "0.8rem", marginLeft: "5px" }}>{getCartCount()}</span>}</Link>
          {isLoggedIn ? (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ fontSize: "0.9rem", color: "white" }}>Welcome, {user.email}</span>
              <button 
                onClick={logout}
                style={{ padding: "6px 15px", fontSize: "0.9rem", background: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "1rem", fontWeight: "600", padding: "8px 0", borderBottom: "2px solid transparent", transition: "all 0.3s ease" }} onMouseEnter={(e) => e.target.style.borderBottom = "2px solid white"} onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}>LOGIN</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
