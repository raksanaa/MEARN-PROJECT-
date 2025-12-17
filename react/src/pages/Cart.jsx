import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <main style={{ padding: "50px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div className="professional-card" style={{ padding: "50px" }}>
          <h2 style={{ color: "#1e3c72", marginBottom: "20px" }}>Your Cart is Empty</h2>
          <p style={{ color: "#555" }}>Add some toys to your cart to see them here!</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ color: "#000", fontSize: "2.5rem", textAlign: "center", marginBottom: "40px", fontWeight: "700" }}>Shopping Cart</h2>
      
      {cartItems.map(item => (
        <div key={item.id} className="professional-card" style={{ padding: "20px", marginBottom: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "100px 1fr auto auto", gap: "20px", alignItems: "center" }}>
            <img src={item.img} alt={item.name} style={{ width: "100px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
            
            <div>
              <h3 style={{ margin: "0 0 5px 0", color: "#1e3c72" }}>{item.name}</h3>
              <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>{item.description}</p>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{ padding: "5px 10px", fontSize: "1rem", minWidth: "30px" }}
              >
                -
              </button>
              <span style={{ fontSize: "1.1rem", fontWeight: "600", minWidth: "30px", textAlign: "center" }}>
                {item.quantity}
              </span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{ padding: "5px 10px", fontSize: "1rem", minWidth: "30px" }}
              >
                +
              </button>
            </div>
            
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: "0 0 10px 0", fontSize: "1.2rem", fontWeight: "bold", color: "#2a5298" }}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ padding: "5px 15px", fontSize: "0.8rem", background: "#dc3545", color: "white" }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="professional-card" style={{ padding: "30px", marginTop: "30px", textAlign: "center" }}>
        <h3 style={{ color: "#1e3c72", fontSize: "1.8rem", margin: "0 0 20px 0" }}>
          Total: ${getTotalPrice().toFixed(2)}
        </h3>
        <Link to="/payment">
          <button style={{ padding: "15px 40px", fontSize: "1.1rem" }}>
            CHECKOUT
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Cart;