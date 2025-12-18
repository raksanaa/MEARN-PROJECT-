import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/api";

const giftProducts = [
  {
    id: 77,
    name: "Birthday Bear with Cake",
    price: 48.99,
    description: "Festive bear holding birthday cake with candles",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "gift"
  },
  {
    id: 78,
    name: "Anniversary Rose Bouquet Set",
    price: 65.99,
    description: "Elegant plush roses with anniversary message card",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "gift"
  },
  {
    id: 79,
    name: "Surprise Gift Box - Small",
    price: 35.99,
    description: "Mystery plush toy in beautiful gift wrapping",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
    category: "gift"
  },
  {
    id: 80,
    name: "Surprise Gift Box - Large",
    price: 75.99,
    description: "Premium mystery plush collection in luxury box",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
    category: "gift"
  },
  {
    id: 81,
    name: "Graduation Owl",
    price: 42.99,
    description: "Wise owl wearing graduation cap with diploma",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "gift"
  },
  {
    id: 82,
    name: "Get Well Soon Puppy",
    price: 39.99,
    description: "Caring puppy with bandage and 'Feel Better' message",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "gift"
  },
  {
    id: 83,
    name: "Congratulations Lion",
    price: 44.99,
    description: "Proud lion with 'Congratulations' banner",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "gift"
  },
  {
    id: 84,
    name: "Thank You Elephant",
    price: 41.99,
    description: "Grateful elephant holding 'Thank You' sign",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "gift"
  }
];

function GiftSpecial() {
  const [allProducts, setAllProducts] = useState(giftProducts);

  useEffect(() => {
    const loadBackendProducts = async () => {
      try {
        const backendProducts = await fetchProducts();
        const giftBackendProducts = backendProducts.filter(product => product.category === 'gift');
        if (giftBackendProducts.length > 0) {
          setAllProducts([...giftProducts, ...giftBackendProducts]);
        }
      } catch (error) {
        console.log('Backend not available, using static products');
      }
    };
    loadBackendProducts();
  }, []);

  return (
    <main style={{ padding: "50px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#FF6B35", marginBottom: "10px" }}>🎁 Gift Special Collection</h2>
        <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          Perfect gifts for every occasion! Birthday surprises, anniversary treasures, and mystery boxes that bring joy.
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px", flexWrap: "wrap" }}>
          <span style={{ background: "#FFF3E0", color: "#FF6B35", padding: "8px 16px", borderRadius: "20px", fontSize: "0.9rem" }}>🎂 Birthdays</span>
          <span style={{ background: "#FFF3E0", color: "#FF6B35", padding: "8px 16px", borderRadius: "20px", fontSize: "0.9rem" }}>💝 Anniversaries</span>
          <span style={{ background: "#FFF3E0", color: "#FF6B35", padding: "8px 16px", borderRadius: "20px", fontSize: "0.9rem" }}>📦 Surprise Boxes</span>
        </div>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {allProducts.map((product) => (
          <div key={product.id} style={{ 
            background: "white", 
            borderRadius: "15px", 
            padding: "20px", 
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            border: "2px solid #FFF3E0"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 107, 53, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
          }}>
            <img 
              src={product.img} 
              alt={product.name} 
              style={{ 
                width: "100%", 
                height: "250px", 
                objectFit: "cover", 
                borderRadius: "10px",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.3rem", marginBottom: "10px" }}>{product.name}</h3>
            <p style={{ color: "#FF6B35", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "10px" }}>${product.price}</p>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "20px" }}>{product.description}</p>
            <Link 
              to={`/product/${product.id}`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              🎁 Perfect Gift
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GiftSpecial;