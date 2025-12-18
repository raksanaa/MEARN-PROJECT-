import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/api";

const kidsProducts = [
  {
    id: 69,
    name: "Soft Safety Bear",
    price: 32.99,
    description: "Extra soft bear with safety lock eyes, perfect for babies",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "kids"
  },
  {
    id: 70,
    name: "ABC Learning Elephant",
    price: 45.99,
    description: "Educational elephant that teaches letters and numbers",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "kids"
  },
  {
    id: 71,
    name: "Bedtime Bunny",
    price: 38.99,
    description: "Soothing bunny with lullaby sounds for peaceful sleep",
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500",
    category: "kids"
  },
  {
    id: 72,
    name: "Counting Sheep Set",
    price: 52.99,
    description: "Set of 5 numbered sheep for learning to count",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500",
    category: "kids"
  },
  {
    id: 73,
    name: "Night Light Owl",
    price: 41.99,
    description: "Owl with gentle LED night light for bedtime comfort",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    category: "kids"
  },
  {
    id: 74,
    name: "Shape Sorting Turtle",
    price: 36.99,
    description: "Interactive turtle teaching shapes and colors",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500",
    category: "kids"
  },
  {
    id: 75,
    name: "Musical Monkey",
    price: 43.99,
    description: "Monkey that plays gentle melodies and nursery rhymes",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "kids"
  },
  {
    id: 76,
    name: "Teething Ring Giraffe",
    price: 28.99,
    description: "Safe silicone teething ring attached to soft giraffe",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "kids"
  }
];

function KidsBaby() {
  const [allProducts, setAllProducts] = useState(kidsProducts);

  useEffect(() => {
    const loadBackendProducts = async () => {
      try {
        const backendProducts = await fetchProducts();
        const kidsBackendProducts = backendProducts.filter(product => product.category === 'kids');
        if (kidsBackendProducts.length > 0) {
          setAllProducts([...kidsProducts, ...kidsBackendProducts]);
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
        <h2 style={{ fontSize: "2.5rem", color: "#4CAF50", marginBottom: "10px" }}>👶 Kids & Baby Collection</h2>
        <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          Safe, soft, and educational plush toys designed for little ones. Perfect bedtime companions and learning friends!
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px", flexWrap: "wrap" }}>
          <span style={{ background: "#E8F5E8", color: "#4CAF50", padding: "8px 16px", borderRadius: "20px", fontSize: "0.9rem" }}>✓ Safety Tested</span>
          <span style={{ background: "#E8F5E8", color: "#4CAF50", padding: "8px 16px", borderRadius: "20px", fontSize: "0.9rem" }}>✓ Educational</span>
          <span style={{ background: "#E8F5E8", color: "#4CAF50", padding: "8px 16px", borderRadius: "20px", fontSize: "0.9rem" }}>✓ Bedtime Ready</span>
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
            border: "2px solid #E8F5E8"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(76, 175, 80, 0.15)";
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
            <p style={{ color: "#4CAF50", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "10px" }}>${product.price}</p>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "20px" }}>{product.description}</p>
            <Link 
              to={`/product/${product.id}`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
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
              👶 Safe for Kids
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default KidsBaby;