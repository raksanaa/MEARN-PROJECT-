const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  // Anime Characters
  {
    name: "Naruto Uzumaki Plush",
    description: "Orange ninja with dream to become Hokage",
    price: 39.99,
    image: "naruto-plush.jpg",
    category: "anime",
    stock: 25
  },
  {
    name: "Pikachu Plush",
    description: "Electric mouse Pokemon with rosy cheeks",
    price: 34.99,
    image: "pikachu-plush.jpg",
    category: "anime",
    stock: 30
  },
  {
    name: "Totoro Plush",
    description: "Forest spirit from Studio Ghibli",
    price: 45.99,
    image: "totoro-plush.jpg",
    category: "anime",
    stock: 20
  },
  {
    name: "Sailor Moon Plush",
    description: "Magical girl warrior of love and justice",
    price: 41.99,
    image: "sailormoon-plush.jpg",
    category: "anime",
    stock: 22
  },
  {
    name: "Goku Plush",
    description: "Super Saiyan warrior from Dragon Ball",
    price: 43.99,
    image: "goku-plush.jpg",
    category: "anime",
    stock: 18
  },
  {
    name: "Luffy Plush",
    description: "Rubber pirate captain with straw hat",
    price: 38.99,
    image: "luffy-plush.jpg",
    category: "anime",
    stock: 24
  },
  // Fantasy & Magical
  {
    name: "Dragon Plush",
    description: "Majestic fire-breathing dragon",
    price: 49.99,
    image: "dragon-plush.jpg",
    category: "fantasy",
    stock: 15
  },
  {
    name: "Phoenix Plush",
    description: "Mythical bird that rises from ashes",
    price: 47.99,
    image: "phoenix-plush.jpg",
    category: "fantasy",
    stock: 12
  },
  {
    name: "Fairy Plush",
    description: "Magical fairy with sparkly wings",
    price: 32.99,
    image: "fairy-plush.jpg",
    category: "fantasy",
    stock: 28
  },
  {
    name: "Pegasus Plush",
    description: "Winged horse from Greek mythology",
    price: 44.99,
    image: "pegasus-plush.jpg",
    category: "fantasy",
    stock: 16
  },
  {
    name: "Griffin Plush",
    description: "Half eagle, half lion mythical creature",
    price: 46.99,
    image: "griffin-plush.jpg",
    category: "fantasy",
    stock: 14
  },
  {
    name: "Forest Spirit Plush",
    description: "Mystical guardian of the enchanted forest",
    price: 35.99,
    image: "forest-spirit-plush.jpg",
    category: "fantasy",
    stock: 20
  },
  {
    name: "Mermaid Plush",
    description: "Beautiful sea princess with shimmery tail",
    price: 39.99,
    image: "mermaid-plush.jpg",
    category: "fantasy",
    stock: 22
  },
  {
    name: "Wizard Plush",
    description: "Wise magic wielder with staff and robes",
    price: 42.99,
    image: "wizard-plush.jpg",
    category: "fantasy",
    stock: 18
  },
  {
    name: "Elf Warrior Plush",
    description: "Noble elf hero with bow and arrows",
    price: 40.99,
    image: "elf-warrior-plush.jpg",
    category: "fantasy",
    stock: 19
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    console.log('🌱 Starting database seeding...');

    // Check existing products
    const existingCount = await Product.countDocuments();
    console.log(`📊 Current products in database: ${existingCount}`);

    // Insert new products
    console.log('\n🚀 Adding new products:');
    const insertedProducts = await Product.insertMany(products);
    
    // Show each added product
    insertedProducts.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price} (${product.category})`);
    });
    
    console.log(`\n✅ Successfully added ${insertedProducts.length} products to database`);
    
    // Show final count
    const finalCount = await Product.countDocuments();
    console.log(`📊 Total products in database: ${finalCount}`);
    
    // Show products by category
    const animeCount = await Product.countDocuments({ category: 'anime' });
    const fantasyCount = await Product.countDocuments({ category: 'fantasy' });
    console.log(`\n📈 Products by category:`);
    console.log(`   🎌 Anime Characters: ${animeCount}`);
    console.log(`   🧚 Fantasy & Magical: ${fantasyCount}`);

    mongoose.connection.close();
    console.log('\n🔒 Database connection closed');
    console.log('🎉 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();