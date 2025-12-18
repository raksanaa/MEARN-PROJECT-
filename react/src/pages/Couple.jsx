import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/api";

const coupleProducts = [
  {
    id: 46,
    name: "Couple Bears Set",
    price: 59.99,
    description: "Adorable matching teddy bear couple with heart accessories",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500",
    category: "couple"
  },
  {
    id: 47,
    name: "Wedding Dolls Pair",
    price: 65.99,
    description: "Bride and groom plush dolls perfect for anniversaries",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500",
    category: "couple"
  },
  {
    id: 48,
    name: "Matching Penguin Couple",
    price: 49.99,
    description: "Cute penguin pair with matching scarves and love hearts",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
    category: "couple"
  },
  {
    id: 49,
    name: "Love Birds Plush Set",
    price: 44.99,
    description: "Two adorable birds sitting together on a heart-shaped perch",
    img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500",
    category: "couple"
  },
  {
    id: 50,
    name: "Romantic Rabbits Duo",
    price: 52.99,
    description: "Sweet bunny couple holding hands with pink bows",
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500",
    category: "couple"
  },
  {
    id: 59,
    name: "Anniversary Bears Duo",
    price: 67.99,
    description: "Golden anniversary bears with '25 Years' embroidery",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "couple"
  },
  {
    id: 60,
    name: "Hugging Koalas Set",
    price: 54.99,
    description: "Two koalas in eternal embrace with eucalyptus leaves",
    img: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=500",
    category: "couple"
  },
  {
    id: 61,
    name: "Mr & Mrs Elephants",
    price: 62.99,
    description: "Elegant elephant couple with bow tie and veil",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "couple"
  },
  {
    id: 62,
    name: "Dancing Foxes Pair",
    price: 48.99,
    description: "Adorable fox couple in dancing pose with flowers",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500",
    category: "couple"
  },
  {
    id: 67,
    name: "Honeymoon Turtles",
    price: 56.99,
    description: "Two turtles with tropical flowers and 'Just Married' sign",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500",
    category: "couple"
  }
];

function Couple() {
  const [allProducts, setAllProducts] = useState(coupleProducts);

  useEffect(() => {
    const loadBackendProducts = async () => {
      try {
        const backendProducts = await fetchProducts();
        const coupleBackendProducts = backendProducts.filter(product => product.category === 'couple');
        if (coupleBackendProducts.length > 0) {
          setAllProducts([...coupleProducts, ...coupleBackendProducts]);
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
        <h2 style={{ fontSize: "2.5rem", color: "#8B5CF6", marginBottom: "10px" }}>💕 Couple Plush Collection</h2>
        <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          Perfect pairs for couples, anniversaries, and romantic occasions. Share the love with matching plush companions!
        </p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {allProducts.map((product) => (
          <div key={product.id} style={{ 
            background: "white", 
            borderRadius: "15px", 
            padding: "20px", 
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            border: "2px solid #f0f0f0"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(139, 92, 246, 0.15)";
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
            <p style={{ color: "#8B5CF6", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "10px" }}>${product.price}</p>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "20px" }}>{product.description}</p>
            <Link 
              to={`/product/${product.id}`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
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
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Couple;