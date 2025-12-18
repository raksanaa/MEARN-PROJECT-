const API_BASE_URL = 'https://mearn-project-1-bs1e.onrender.com/api';

// Fetch products from backend
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map(product => ({
      id: `backend-${product._id}`,
      name: product.name,
      price: product.price,
      description: product.description,
      img: product.image.startsWith('http') 
        ? product.image 
        : `https://mearn-project-1-bs1e.onrender.com/uploads/${product.image}`,
      category: product.category
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// All your previous products
export const staticProducts = [
  {
    id: 1,
    name: "Panda Plush",
    price: 29.99,
    description: "Cute and cuddly panda stuffed animal",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500",
    category: "animals"
  },
  {
    id: 2,
    name: "Rabbit Plush",
    price: 24.99,
    description: "Soft and adorable rabbit stuffed toy",
    img: "https://m.media-amazon.com/images/I/51eaZD-zgNL._SY300_SX300_QL70_FMwebp_.jpg",
    category: "animals"
  },
  {
    id: 3,
    name: "Rat Plush",
    price: 19.99,
    description: "Small and cute rat stuffed animal",
    img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500",
    category: "animals"
  },
  {
    id: 4,
    name: "Bear Plush",
    price: 34.99,
    description: "Large fluffy teddy bear for hugging",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLCp-AlhUP767XwgTSppqRFKUFCF_nqx1QA&s",
    category: "animals"
  },
  {
    id: 5,
    name: "Cat Plush",
    price: 22.99,
    description: "Soft kitten stuffed animal with whiskers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wWwzqxdUP_9b9vTSHi3XC7nJxEhUZskNsQ&s",
    category: "animals"
  },
  {
    id: 6,
    name: "Dog Plush",
    price: 27.99,
    description: "Adorable puppy plush with floppy ears",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipaFRIJOXiybSXw3-aWM12HaXbY5exP-uKQ&s",
    category: "animals"
  },
  {
    id: 7,
    name: "Elephant Plush",
    price: 32.99,
    description: "Large gray elephant with soft trunk",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJhR_5oWfqmQrtfuSaXgbzQd-QhTYjXB-fg&s",
    category: "animals"
  },
  {
    id: 8,
    name: "Lion Plush",
    price: 28.99,
    description: "Brave lion king with fluffy mane",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Th_1bsDpFp_Wbf2g8TahoDPrE--AhhdzGQ&s",
    category: "animals"
  },
  {
    id: 9,
    name: "Monkey Plush",
    price: 21.99,
    description: "Playful monkey with long arms",
    img: "https://images-cdn.ubuy.co.in/636bf3074a3cf07b74556a12-5-pieces-monkey-plush-toy-set-1-mommy.jpg",
    category: "animals"
  },
  {
    id: 10,
    name: "Unicorn Plush",
    price: 35.99,
    description: "Magical unicorn with rainbow mane",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/402580974/JH/AN/YB/2227189/unicorn-big-size-doll.jpg",
    category: "animals"
  },
  {
    id: 11,
    name: "Dinosaur Plush",
    price: 26.99,
    description: "Friendly T-Rex dinosaur toy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnPZjLF_Jme_HkCvKX7VwvZvoQPIuQcux7A&s",
    category: "animals"
  },
  {
    id: 12,
    name: "Owl Plush",
    price: 23.99,
    description: "Wise owl with big round eyes",
    img: "https://images-cdn.ubuy.co.in/634e8c0df8957469547832b8-plush-figure-toys-owl-plush-doll-cute.jpg",
    category: "animals"
  },
  {
    id: 13,
    name: "BTS RM Plush Doll",
    price: 45.99,
    description: "Official BTS RM character plush doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2DmV6CByFCOjGXyJcLGMftsOeIpux9vFGg&s",
    category: "kpop"
  },
  {
    id: 14,
    name: "BLACKPINK Lisa Plush",
    price: 42.99,
    description: "Cute BLACKPINK Lisa character doll",
    img: "https://i.pinimg.com/736x/9c/4a/d8/9c4ad8d5725e89453315e266e7d1b148.jpg",
    category: "kpop"
  },
  {
    id: 15,
    name: "TWICE Momo Plush",
    price: 39.99,
    description: "Adorable TWICE Momo character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4w-o0iGPb3vYhmOZiEz7DnBJjEkPedAy8Q&s",
    category: "kpop"
  },
  {
    id: 16,
    name: "Stray Kids Bang Chan Plush",
    price: 44.99,
    description: "Official Stray Kids Bang Chan doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-9cnAD9SJ3cBlqAWoa8QNNofBRA4fSuoBA&s",
    category: "kpop"
  },
  {
    id: 17,
    name: "NewJeans Minji Plush",
    price: 41.99,
    description: "Cute NewJeans Minji character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43EbfDIgKFAkZw6ObBC48SWTdFFMRETidIQ&s",
    category: "kpop"
  },
  {
    id: 18,
    name: "IVE Wonyoung Plush",
    price: 43.99,
    description: "Beautiful IVE Wonyoung character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzGsCzhEGXEKvCi0eMbRX9mwx2cOsFbWUgw&s",
    category: "kpop"
  },
  {
    id: 19,
    name: "ITZY Yeji Plush",
    price: 40.99,
    description: "Cool ITZY Yeji character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN80tt-GBI6KxBRWKsDw-XU-nudTn7dEudLQ&s",
    category: "kpop"
  },
  {
    id: 20,
    name: "aespa Karina Plush",
    price: 46.99,
    description: "Stylish aespa Karina character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoWpt9yd4PGvvn1AXrQPdima6-F7G_i8HQw&s",
    category: "kpop"
  },
  {
    id: 21,
    name: "SEVENTEEN Joshua Plush",
    price: 44.99,
    description: "Handsome SEVENTEEN Joshua doll",
    img: "https://i.pinimg.com/564x/24/47/12/2447124c58215f0536feeccad485f38b.jpg",
    category: "kpop"
  },
  {
    id: 22,
    name: "ENHYPEN Heeseung Plush",
    price: 42.99,
    description: "Charming ENHYPEN Heeseung character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pojou84npnEiRUDgJoIciomA3X-3sBxQVA&s",
    category: "kpop"
  },
  {
    id: 23,
    name: "Red Velvet Irene Plush",
    price: 41.99,
    description: "Elegant Red Velvet Irene character plush",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpuzbxr7JDxQSvVpqeKd8xuGjfjE5pYTKYA&s",
    category: "kpop"
  },
  {
    id: 24,
    name: "TXT Yeonjun Plush",
    price: 43.99,
    description: "Trendy TXT Yeonjun character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbFLFYqVr0s_yx3IepXOjSgTo_GTTs9BCRA&s",
    category: "kpop"
  },
  {
    id: 25,
    name: "Tanjiro Kamado Plush",
    price: 38.99,
    description: "Brave Demon Slayer Tanjiro with checkered haori",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTquAoOJG_C0oQrsi2wO02hmBprs1vQyXGWA&s",
    category: "demon hunter"
  },
  {
    id: 26,
    name: "Nezuko Kamado Plush",
    price: 36.99,
    description: "Adorable Nezuko with bamboo muzzle",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_GCK-WYW1YOvYSWAFJq8dtZd2WsPdNOlCQ&s",
    category: "demon hunter"
  },
  {
    id: 27,
    name: "Zenitsu Agatsuma Plush",
    price: 37.99,
    description: "Thunder Breathing Zenitsu character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWL3AKBqBcndtg4OjYiH-rMxbTb9uAAdxZQ&s",
    category: "demon hunter"
  },
  {
    id: 28,
    name: "Inosuke Hashibira Plush",
    price: 39.99,
    description: "Wild boar mask Inosuke plush toy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtUxPqOWD-8wp14zQw4V9WrrA6bfSJFJSqw&s",
    category: "demon hunter"
  },
  {
    id: 29,
    name: "Giyu Tomioka Plush",
    price: 41.99,
    description: "Water Hashira Giyu character doll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHplyOMHwPU1m2a6G1ZBB7_2UDWib0cBJybA&s",
    category: "demon hunter"
  },
  {
    id: 30,
    name: "Rengoku Kyojuro Plush",
    price: 42.99,
    description: "Flame Hashira Rengoku with fiery design",
    img: "https://m.media-amazon.com/images/I/61YnYccEoiL._AC_UF350,350_QL80_.jpg",
    category: "demon hunter"
  },
  {
    id: 31,
    name: "Naruto Uzumaki Plush",
    price: 39.99,
    description: "Orange ninja with dream to become Hokage",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 32,
    name: "Pikachu Plush",
    price: 34.99,
    description: "Electric mouse Pokemon with rosy cheeks",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 33,
    name: "Totoro Plush",
    price: 45.99,
    description: "Forest spirit from Studio Ghibli",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 34,
    name: "Sailor Moon Plush",
    price: 41.99,
    description: "Magical girl warrior of love and justice",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 35,
    name: "Goku Plush",
    price: 43.99,
    description: "Super Saiyan warrior from Dragon Ball",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcUvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 36,
    name: "Luffy Plush",
    price: 38.99,
    description: "Rubber pirate captain with straw hat",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcVvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "anime"
  },
  {
    id: 37,
    name: "Dragon Plush",
    price: 49.99,
    description: "Majestic fire-breathing dragon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcWvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 38,
    name: "Phoenix Plush",
    price: 47.99,
    description: "Mythical bird that rises from ashes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcXvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 39,
    name: "Fairy Plush",
    price: 32.99,
    description: "Magical fairy with sparkly wings",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcYvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 40,
    name: "Pegasus Plush",
    price: 44.99,
    description: "Winged horse from Greek mythology",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 41,
    name: "Griffin Plush",
    price: 46.99,
    description: "Half eagle, half lion mythical creature",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcAvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 42,
    name: "Forest Spirit Plush",
    price: 35.99,
    description: "Mystical guardian of the enchanted forest",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcBvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 43,
    name: "Mermaid Plush",
    price: 39.99,
    description: "Beautiful sea princess with shimmery tail",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcCvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 44,
    name: "Wizard Plush",
    price: 42.99,
    description: "Wise magic wielder with staff and robes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcDvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  },
  {
    id: 45,
    name: "Elf Warrior Plush",
    price: 40.99,
    description: "Noble elf hero with bow and arrows",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcEvQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s",
    category: "fantasy"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "animals", name: "Animal Plush" },
  { id: "kpop", name: "K-pop Idol Plush" },
  { id: "demon hunter", name: "Demon Hunter Plush" },
  { id: "anime", name: "Anime Characters" },
  { id: "fantasy", name: "Fantasy & Magical" }
];
