import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main style={{ padding: "clamp(40px, 5vw, 60px) 20px", maxWidth: "900px", margin: "0 auto" }}>
      <div className="professional-card" style={{ padding: "50px" }}>
        <h2 style={{ fontSize: "2.5rem", marginTop: 0, color: "#1e3c72", fontWeight: "700" }}>About PlushWorld</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#555" }}>We provide the best quality plush toys at affordable prices. Our mission is to bring joy and comfort through adorable collectibles.</p>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#555", marginTop: "20px" }}>With years of experience in the plush industry, we carefully curate our product selection featuring animals, K-pop idols, and anime characters for all fans.</p>
      </div>

      <div className="professional-card" style={{ padding: "50px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "2rem", marginTop: 0, color: "#1e3c72", fontWeight: "700" }}>Contact Information</h2>
        <div style={{ fontSize: "1.05rem", lineHeight: "2", color: "#555" }}>
          <p><strong>Email:</strong> support@plushworld.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94025</p>
          <p><strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="professional-card" style={{ padding: "50px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "2rem", marginTop: 0, color: "#1e3c72", fontWeight: "700" }}>Feedback Form</h2>
        <form style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Name</label>
            <input type="text" style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} placeholder="Your name" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Email</label>
            <input type="email" style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }} placeholder="Your email" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Rating</label>
            <select style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem" }}>
              <option value="">Select rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Very Poor</option>
            </select>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#555" }}>Feedback</label>
            <textarea rows="5" style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem", resize: "vertical" }} placeholder="Share your feedback about our products and service"></textarea>
          </div>
          <button type="submit" style={{ padding: "12px 30px", fontSize: "1rem" }}>
            SUBMIT FEEDBACK
          </button>
        </form>
      </div>
    </main>
  );
}

export default About;
