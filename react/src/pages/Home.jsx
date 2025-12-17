import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: "40px 20px", minHeight: "100%" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#000", marginBottom: "20px", fontWeight: "700" }}>Welcome to PlushWorld</h2>
        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#000", maxWidth: "600px", margin: "0 auto 30px" }}>Your ultimate destination for adorable plush toys, K-pop collectibles, and anime characters!</p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="professional-card" style={{ padding: "30px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300&h=200&fit=crop" alt="Animal Plush" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "20px" }} />
          <h3 style={{ color: "#1e3c72", marginBottom: "15px" }}>Animal Plush</h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>Cute and cuddly animal friends for all ages</p>
          <Link to="/products">
            <button style={{ padding: "10px 25px", fontSize: "0.9rem" }}>EXPLORE ANIMALS</button>
          </Link>
        </div>
        
        <div className="professional-card" style={{ padding: "30px", textAlign: "center" }}>
          <img src="https://i.pinimg.com/736x/9c/4a/d8/9c4ad8d5725e89453315e266e7d1b148.jpg" alt="K-pop Plush" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "20px" }} />
          <h3 style={{ color: "#1e3c72", marginBottom: "15px" }}>K-pop Idols</h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>Official character dolls of your favorite K-pop stars</p>
          <Link to="/products">
            <button style={{ padding: "10px 25px", fontSize: "0.9rem" }}>EXPLORE K-POP</button>
          </Link>
        </div>
        
        <div className="professional-card" style={{ padding: "30px", textAlign: "center" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTquAoOJG_C0oQrsi2wO02hmBprs1vQyXGWA&s" alt="Demon Hunter Plush" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "20px" }} />
          <h3 style={{ color: "#1e3c72", marginBottom: "15px" }}>Demon Hunter</h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>Anime characters from Demon Slayer series</p>
          <Link to="/products">
            <button style={{ padding: "10px 25px", fontSize: "0.9rem" }}>EXPLORE ANIME</button>
          </Link>
        </div>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/products">
          <button style={{ padding: "15px 40px", fontSize: "1.1rem" }}>
            VIEW ALL PRODUCTS
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
