import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import About from "./pages/About";
import Couple from "./pages/Couple";
import LovePlush from "./pages/LovePlush";
import KidsBaby from "./pages/KidsBaby";
import GiftSpecial from "./pages/GiftSpecial";

function AppContent() {
  const { showToast, toastMessage, setShowToast } = useCart();
  
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/couple" element={<ProtectedRoute><Couple /></ProtectedRoute>} />
            <Route path="/love-plush" element={<ProtectedRoute><LovePlush /></ProtectedRoute>} />
            <Route path="/kids-baby" element={<ProtectedRoute><KidsBaby /></ProtectedRoute>} />
            <Route path="/gift-special" element={<ProtectedRoute><GiftSpecial /></ProtectedRoute>} />
            <Route path="/product/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
        <Toast 
          message={toastMessage}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
