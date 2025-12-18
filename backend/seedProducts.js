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
  },
  // Couple Plush
  {
    name: "Couple Bears Set",
    description: "Adorable matching teddy bear couple with heart accessories",
    price: 59.99,
    image: "couple-bears-set.jpg",
    category: "couple",
    stock: 15
  },
  {
    name: "Wedding Dolls Pair",
    description: "Bride and groom plush dolls perfect for anniversaries",
    price: 65.99,
    image: "wedding-dolls-pair.jpg",
    category: "couple",
    stock: 12
  },
  {
    name: "Matching Penguin Couple",
    description: "Cute penguin pair with matching scarves and love hearts",
    price: 49.99,
    image: "penguin-couple.jpg",
    category: "couple",
    stock: 18
  },
  {
    name: "Love Birds Plush Set",
    description: "Two adorable birds sitting together on a heart-shaped perch",
    price: 44.99,
    image: "love-birds-set.jpg",
    category: "couple",
    stock: 20
  },
  {
    name: "Romantic Rabbits Duo",
    description: "Sweet bunny couple holding hands with pink bows",
    price: 52.99,
    image: "romantic-rabbits.jpg",
    category: "couple",
    stock: 16
  },
  // Love Plush
  {
    name: "Heart Shaped Plush",
    description: "Soft red heart pillow perfect for Valentine's Day",
    price: 29.99,
    image: "heart-plush.jpg",
    category: "love",
    stock: 35
  },
  {
    name: "Love Bear with Rose",
    description: "Teddy bear holding a red rose with 'I Love You' message",
    price: 39.99,
    image: "love-bear-rose.jpg",
    category: "love",
    stock: 25
  },
  {
    name: "Valentine Unicorn",
    description: "Pink and white unicorn with heart-shaped horn and wings",
    price: 42.99,
    image: "valentine-unicorn.jpg",
    category: "love",
    stock: 22
  },
  {
    name: "Cupid Angel Plush",
    description: "Adorable angel with bow and arrow spreading love",
    price: 36.99,
    image: "cupid-angel.jpg",
    category: "love",
    stock: 28
  },
  {
    name: "Love Message Elephant",
    description: "Gray elephant holding a heart with customizable love message",
    price: 45.99,
    image: "love-elephant.jpg",
    category: "love",
    stock: 20
  },
  {
    name: "Valentine Special Bear",
    description: "Limited edition red teddy bear with golden heart embroidery",
    price: 49.99,
    image: "valentine-special-bear.jpg",
    category: "love",
    stock: 15
  },
  {
    name: "Heart Eyes Cat",
    description: "Cute kitten with heart-shaped eyes and pink bow",
    price: 34.99,
    image: "heart-eyes-cat.jpg",
    category: "love",
    stock: 30
  },
  {
    name: "Love Panda with Balloon",
    description: "Panda holding heart-shaped balloon with love message",
    price: 38.99,
    image: "love-panda-balloon.jpg",
    category: "love",
    stock: 24
  },
  {
    name: "Anniversary Bears Duo",
    description: "Golden anniversary bears with '25 Years' embroidery",
    price: 67.99,
    image: "anniversary-bears.jpg",
    category: "couple",
    stock: 10
  },
  {
    name: "Hugging Koalas Set",
    description: "Two koalas in eternal embrace with eucalyptus leaves",
    price: 54.99,
    image: "hugging-koalas.jpg",
    category: "couple",
    stock: 14
  },
  {
    name: "Mr & Mrs Elephants",
    description: "Elegant elephant couple with bow tie and veil",
    price: 62.99,
    image: "mr-mrs-elephants.jpg",
    category: "couple",
    stock: 12
  },
  {
    name: "Dancing Foxes Pair",
    description: "Adorable fox couple in dancing pose with flowers",
    price: 48.99,
    image: "dancing-foxes.jpg",
    category: "couple",
    stock: 16
  },
  {
    name: "Kiss Me Frog Prince",
    description: "Green frog with golden crown and red lips",
    price: 33.99,
    image: "frog-prince.jpg",
    category: "love",
    stock: 26
  },
  {
    name: "Love Potion Bear",
    description: "Purple bear holding magical love potion bottle",
    price: 41.99,
    image: "love-potion-bear.jpg",
    category: "love",
    stock: 18
  },
  {
    name: "Romantic Sloth",
    description: "Sleepy sloth with heart-shaped belly and rose",
    price: 37.99,
    image: "romantic-sloth.jpg",
    category: "love",
    stock: 22
  },
  {
    name: "Love Letter Owl",
    description: "Wise owl delivering love letters with pink ribbon",
    price: 35.99,
    image: "love-letter-owl.jpg",
    category: "love",
    stock: 20
  },
  {
    name: "Honeymoon Turtles",
    description: "Two turtles with tropical flowers and 'Just Married' sign",
    price: 56.99,
    image: "honeymoon-turtles.jpg",
    category: "couple",
    stock: 13
  },
  {
    name: "Valentine Llama",
    description: "Fluffy llama with heart sunglasses and pink scarf",
    price: 43.99,
    image: "valentine-llama.jpg",
    category: "love",
    stock: 17
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
    const coupleCount = await Product.countDocuments({ category: 'couple' });
    const loveCount = await Product.countDocuments({ category: 'love' });
    console.log(`\n📈 Products by category:`);
    console.log(`   🎌 Anime Characters: ${animeCount}`);
    console.log(`   🧚 Fantasy & Magical: ${fantasyCount}`);
    console.log(`   💑 Couple Plush: ${coupleCount}`);
    console.log(`   💖 Love Plush: ${loveCount}`);

    mongoose.connection.close();
    console.log('\n🔒 Database connection closed');
    console.log('🎉 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();