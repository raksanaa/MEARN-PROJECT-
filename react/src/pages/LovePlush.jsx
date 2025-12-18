import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/api";

const loveProducts = [
  {
    id: 51,
    name: "Heart Shaped Plush",
    price: 29.99,
    description: "Soft red heart pillow perfect for Valentine's Day",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500",
    category: "love"
  },
  {
    id: 52,
    name: "Love Bear with Rose",
    price: 39.99,
    description: "Teddy bear holding a red rose with 'I Love You' message",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "love"
  },
  {
    id: 53,
    name: "Valentine Unicorn",
    price: 42.99,
    description: "Pink and white unicorn with heart-shaped horn and wings",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    category: "love"
  },
  {
    id: 54,
    name: "Cupid Angel Plush",
    price: 36.99,
    description: "Adorable angel with bow and arrow spreading love",
    img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
    category: "love"
  },
  {
    id: 55,
    name: "Love Message Elephant",
    price: 45.99,
    description: "Gray elephant holding a heart with customizable love message",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "love"
  },
  {
    id: 56,
    name: "Valentine Special Bear",
    price: 49.99,
    description: "Limited edition red teddy bear with golden heart embroidery",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "love"
  },
  {
    id: 57,
    name: "Heart Eyes Cat",
    price: 34.99,
    description: "Cute kitten with heart-shaped eyes and pink bow",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500",
    category: "love"
  },
  {
    id: 58,
    name: "Love Panda with Balloon",
    price: 38.99,
    description: "Panda holding heart-shaped balloon with love message",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "love"
  },
  {
    id: 63,
    name: "Kiss Me Frog Prince",
    price: 33.99,
    description: "Green frog with golden crown and red lips",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    category: "love"
  },
  {
    id: 64,
    name: "Love Potion Bear",
    price: 41.99,
    description: "Purple bear holding magical love potion bottle",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "love"
  },
  {
    id: 65,
    name: "Romantic Sloth",
    price: 37.99,
    description: "Sleepy sloth with heart-shaped belly and rose",
    img: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=500",
    category: "love"
  },
  {
    id: 66,
    name: "Love Letter Owl",
    price: 35.99,
    description: "Wise owl delivering love letters with pink ribbon",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "love"
  },
  {
    id: 68,
    name: "Valentine Llama",
    price: 43.99,
    description: "Fluffy llama with heart sunglasses and pink scarf",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "love"
  }
];

function LovePlush() {
  const [allProducts, setAllProducts] = useState(loveProducts);

  useEffect(() => {
    const loadBackendProducts = async () => {
      try {
        const backendProducts = await fetchProducts();
        const loveBackendProducts = backendProducts.filter(product => product.category === 'love');
        if (loveBackendProducts.length > 0) {
          setAllProducts([...loveProducts, ...loveBackendProducts]);
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
        <h2 style={{ fontSize: "2.5rem", color: "#E91E63", marginBottom: "10px" }}>💖 Love Plush Collection</h2>
        <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          Express your love with our heart-warming collection! Perfect for Valentine's Day, anniversaries, and special romantic moments.
        </p>
        <div style={{ 
          background: "linear-gradient(135deg, #FF6B9D 0%, #E91E63 100%)", 
          color: "white", 
          padding: "15px 30px", 
          borderRadius: "25px", 
          display: "inline-block", 
          marginTop: "20px",
          fontWeight: "600"
        }}>
          ✨ Valentine's Special Collection ✨
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
            border: "2px solid #FFE0E6"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(233, 30, 99, 0.15)";
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
            <p style={{ color: "#E91E63", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "10px" }}>${product.price}</p>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "20px" }}>{product.description}</p>
            <Link 
              to={`/product/${product.id}`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #FF6B9D 0%, #E91E63 100%)",
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
              💕 Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default LovePlush;