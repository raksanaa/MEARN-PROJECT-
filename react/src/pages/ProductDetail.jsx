import { useParams, useNavigate } from "react-router-dom";
import { staticProducts } from "../utils/api";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleBuyNow = () => {
    addToCart(apiProduct || detailProduct);
    navigate('/payment');
  };
  
  const productList = [
    {
      id: 1,
      name: "Panda Plush",
      price: 29.99,
      description: "Cute and cuddly panda stuffed animal with authentic black and white coloring. Made from premium plush material that's incredibly soft to touch.",
      brand: "WildLife Plush",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
      specs: { material: "Premium Plush", size: "10 inches", weight: "180g", filling: "Polyester Fiber", care: "Hand Wash", ageRange: "3+ years" },
      features: ["Authentic Panda Colors", "Embroidered Eyes", "Soft Plush Material", "Child Safe", "Collectible Design"],
      pros: ["Adorable panda design", "Very soft texture", "Safe for children"],
      cons: ["Hand wash only", "May shed slightly"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 2,
      name: "Rabbit Plush",
      price: 24.99,
      description: "Soft and adorable rabbit stuffed toy with long floppy ears and fluffy tail. Perfect cuddle companion for bedtime.",
      brand: "BunnyLove",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/51eaZD-zgNL._SY300_SX300_QL70_FMwebp_.jpg",
      specs: { material: "Soft Plush", size: "8 inches", weight: "150g", filling: "Cotton Blend", care: "Machine Washable", ageRange: "0+ years" },
      features: ["Floppy Ears", "Fluffy Tail", "Machine Washable", "Hypoallergenic", "Bedtime Companion"],
      pros: ["Super soft ears", "Machine washable", "Perfect size for hugging"],
      cons: ["Ears may flatten over time", "Light colored fabric shows dirt"],
      warranty: "6 months manufacturer warranty",
      inStock: true
    },
    {
      id: 3,
      name: "Rat Plush",
      price: 19.99,
      description: "Small and cute rat stuffed animal with detailed features and whiskers. Surprisingly adorable and cuddly design.",
      brand: "TinyPets",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
      specs: { material: "Micro Plush", size: "6 inches", weight: "80g", filling: "Polyester", care: "Spot Clean", ageRange: "3+ years" },
      features: ["Detailed Whiskers", "Compact Size", "Realistic Design", "Soft Texture", "Unique Pet Choice"],
      pros: ["Unique and cute", "Small and portable", "Well-detailed features"],
      cons: ["Very small size", "Spot clean only"],
      warranty: "3 months manufacturer warranty",
      inStock: true
    },
    {
      id: 4,
      name: "Bear Plush",
      price: 34.99,
      description: "Large fluffy teddy bear for hugging with classic brown fur and friendly face. The perfect traditional teddy bear.",
      brand: "ClassicBears",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLCp-AlhUP767XwgTSppqRFKUFCF_nqx1QA&s",
      specs: { material: "Premium Plush", size: "16 inches", weight: "400g", filling: "Polyester Fiber", care: "Machine Washable", ageRange: "0+ years" },
      features: ["Classic Teddy Design", "Extra Large Size", "Button Eyes", "Bow Tie Included", "Premium Quality"],
      pros: ["Large huggable size", "Classic teddy bear look", "High quality materials"],
      cons: ["Takes up storage space", "May be too big for small children"],
      warranty: "2 years manufacturer warranty",
      inStock: true
    },
    {
      id: 5,
      name: "Cat Plush",
      price: 22.99,
      description: "Soft kitten stuffed animal with whiskers and realistic cat features. Purr-fect companion for cat lovers.",
      brand: "FelineFriends",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wWwzqxdUP_9b9vTSHi3XC7nJxEhUZskNsQ&s",
      specs: { material: "Soft Plush", size: "9 inches", weight: "160g", filling: "Polyester", care: "Hand Wash", ageRange: "3+ years" },
      features: ["Realistic Whiskers", "Soft Fur Texture", "Sitting Position", "Embroidered Features", "Cat-like Pose"],
      pros: ["Realistic cat appearance", "Soft and cuddly", "Great for cat lovers"],
      cons: ["Hand wash recommended", "Whiskers may bend"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 6,
      name: "Dog Plush",
      price: 27.99,
      description: "Adorable puppy plush with floppy ears and wagging tail design. Man's best friend in plush form.",
      brand: "PuppyPals",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipaFRIJOXiybSXw3-aWM12HaXbY5exP-uKQ&s",
      specs: { material: "Premium Plush", size: "11 inches", weight: "220g", filling: "Cotton Blend", care: "Machine Washable", ageRange: "0+ years" },
      features: ["Floppy Ears", "Wagging Tail", "Puppy Dog Eyes", "Machine Washable", "Loyal Companion"],
      pros: ["Adorable puppy design", "Soft floppy ears", "Machine washable"],
      cons: ["Tail may flatten", "Shows dirt easily"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 7,
      name: "Elephant Plush",
      price: 32.99,
      description: "Large gray elephant with soft trunk and big ears. Majestic and gentle giant perfect for imaginative play.",
      brand: "Safari Friends",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJhR_5oWfqmQrtfuSaXgbzQd-QhTYjXB-fg&s",
      specs: { material: "Soft Plush", size: "14 inches", weight: "350g", filling: "Polyester Fiber", care: "Spot Clean", ageRange: "3+ years" },
      features: ["Moveable Trunk", "Large Ears", "Gray Coloring", "Stable Standing", "Educational Value"],
      pros: ["Large impressive size", "Educational about animals", "Stable design"],
      cons: ["Spot clean only", "Takes up space"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 8,
      name: "Lion Plush",
      price: 28.99,
      description: "Brave lion king with fluffy mane and regal appearance. The king of the jungle in cuddly form.",
      brand: "Safari Friends",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Th_1bsDpFp_Wbf2g8TahoDPrE--AhhdzGQ&s",
      specs: { material: "Premium Plush", size: "12 inches", weight: "280g", filling: "Polyester", care: "Hand Wash", ageRange: "3+ years" },
      features: ["Fluffy Mane", "Regal Pose", "Golden Color", "Embroidered Face", "King of Jungle"],
      pros: ["Majestic appearance", "Fluffy mane texture", "Great for imaginative play"],
      cons: ["Mane may tangle", "Hand wash only"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 9,
      name: "Monkey Plush",
      price: 21.99,
      description: "Playful monkey with long arms perfect for hanging and hugging. Brings jungle fun to playtime.",
      brand: "Jungle Buddies",
      rating: 4.5,
      image: "https://images-cdn.ubuy.co.in/636bf3074a3cf07b74556a12-5-pieces-monkey-plush-toy-set-1-mommy.jpg",
      specs: { material: "Soft Plush", size: "10 inches", weight: "140g", filling: "Cotton Blend", care: "Machine Washable", ageRange: "3+ years" },
      features: ["Long Arms", "Hanging Design", "Playful Expression", "Brown Coloring", "Flexible Limbs"],
      pros: ["Fun hanging feature", "Playful design", "Machine washable"],
      cons: ["Arms may stretch", "Small size"],
      warranty: "6 months manufacturer warranty",
      inStock: true
    },
    {
      id: 10,
      name: "Unicorn Plush",
      price: 35.99,
      description: "Magical unicorn with rainbow mane and sparkly horn. Brings fantasy and magic to any child's collection.",
      brand: "MagicLand",
      rating: 4.9,
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/402580974/JH/AN/YB/2227189/unicorn-big-size-doll.jpg",
      specs: { material: "Ultra-soft Plush", size: "15 inches", weight: "320g", filling: "Polyester Fiber", care: "Hand Wash", ageRange: "3+ years" },
      features: ["Rainbow Mane", "Sparkly Horn", "White Body", "Magical Design", "Fantasy Theme"],
      pros: ["Beautiful rainbow colors", "Sparkly horn detail", "Large huggable size"],
      cons: ["Horn may be delicate", "Hand wash only"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 11,
      name: "Dinosaur Plush",
      price: 26.99,
      description: "Friendly T-Rex dinosaur toy with soft spikes and prehistoric charm. Perfect for dino enthusiasts.",
      brand: "DinoWorld",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnPZjLF_Jme_HkCvKX7VwvZvoQPIuQcux7A&s",
      specs: { material: "Soft Plush", size: "13 inches", weight: "250g", filling: "Polyester", care: "Machine Washable", ageRange: "3+ years" },
      features: ["Soft Spikes", "T-Rex Design", "Green Coloring", "Educational", "Prehistoric Theme"],
      pros: ["Educational about dinosaurs", "Soft despite spikes", "Machine washable"],
      cons: ["May intimidate very young children", "Spikes may flatten"],
      warranty: "1 year manufacturer warranty",
      inStock: true
    },
    {
      id: 12,
      name: "Owl Plush",
      price: 23.99,
      description: "Wise owl with big round eyes and soft feathered texture. Perfect nighttime companion with calming presence.",
      brand: "NightOwls",
      rating: 4.8,
      image: "https://images-cdn.ubuy.co.in/634e8c0df8957469547832b8-plush-figure-toys-owl-plush-doll-cute.jpg",
      specs: { material: "Feather-soft Plush", size: "8 inches", weight: "120g", filling: "Cotton Blend", care: "Spot Clean", ageRange: "0+ years" },
      features: ["Big Round Eyes", "Feathered Texture", "Wise Expression", "Compact Size", "Nighttime Theme"],
      pros: ["Adorable big eyes", "Soft feathered feel", "Perfect bedtime size"],
      cons: ["Spot clean only", "Eyes may collect dust"],
      warranty: "6 months manufacturer warranty",
      inStock: true
    }
  ];

  const apiProduct = staticProducts.find(p => p.id === parseInt(id));
  const detailProduct = productList.find(p => p.id === parseInt(id));
  const product = apiProduct ? { ...detailProduct, ...apiProduct, image: apiProduct.img } : detailProduct;

  if (!product) {
    return <main style={{ padding: "40px", textAlign: "center" }}><h2 style={{ color: "#1e3c72" }}>Product not found</h2></main>;
  }

  return (
    <main style={{ padding: "50px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="professional-card" style={{ padding: "40px", marginBottom: "30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>
          <img src={product.img || product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} />
          <div>
            <h1 style={{ marginTop: 0, fontSize: "2.2rem", color: "#1e3c72", fontWeight: "700" }}>{product.name}</h1>
            <p style={{ fontSize: "2.2rem", color: "#2a5298", fontWeight: "bold", margin: "20px 0" }}>${product.price}</p>
            <p style={{ fontSize: "1rem", color: "#666" }}><strong>Brand:</strong> {product.brand}</p>
            <p style={{ fontSize: "1rem", color: "#666" }}><strong>Rating:</strong> ⭐ {product.rating}/5</p>
            <p style={{ fontSize: "1rem", color: product.inStock ? "#28a745" : "#dc3545", fontWeight: "600" }}>{product.inStock ? "✓ In Stock" : "Out of Stock"}</p>
            <p style={{ lineHeight: "1.7", marginTop: "20px", color: "#555" }}>{product.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "25px" }}>
              <button 
                onClick={() => addToCart(apiProduct || detailProduct)}
                style={{ padding: "15px 20px", fontSize: "1rem", background: "white", color: "#1e3c72", border: "2px solid #1e3c72" }}
              >
                ADD TO CART
              </button>
              <button 
                onClick={handleBuyNow}
                style={{ padding: "15px 20px", fontSize: "1rem" }}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="professional-card" style={{ padding: "40px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", marginTop: 0, color: "#1e3c72", fontWeight: "700" }}>Technical Specifications</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "25px" }}>
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} style={{ padding: "20px", background: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #2a5298" }}>
              <strong style={{ color: "#1e3c72", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
              <p style={{ margin: "8px 0 0 0", color: "#555", fontSize: "0.95rem" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="professional-card" style={{ padding: "40px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", marginTop: 0, color: "#1e3c72", fontWeight: "700" }}>Key Features</h2>
        <ul style={{ lineHeight: "2", fontSize: "1rem", color: "#555", paddingLeft: "20px" }}>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "30px" }}>
        <div className="professional-card" style={{ padding: "30px" }}>
          <h3 style={{ fontSize: "1.5rem", marginTop: 0, color: "#28a745", fontWeight: "700" }}>Advantages</h3>
          <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", color: "#555" }}>
            {product.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="professional-card" style={{ padding: "30px" }}>
          <h3 style={{ fontSize: "1.5rem", marginTop: 0, color: "#dc3545", fontWeight: "700" }}>Considerations</h3>
          <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", color: "#555" }}>
            {product.cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="professional-card" style={{ marginTop: "30px", padding: "30px", background: "#f8f9fa" }}>
        <h3 style={{ fontSize: "1.5rem", marginTop: 0, color: "#1e3c72", fontWeight: "700" }}>Warranty Information</h3>
        <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>{product.warranty}</p>
      </div>
    </main>
  );
}

export default ProductDetail;
