const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(`📎 Fetched ${products.length} products from database`);
    res.json(products);
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get single product
const getProduct = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid product ID format' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    
    // Validation
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'Name, description, price, and category are required' });
    }
    
    if (price < 0 || (stock && stock < 0)) {
      return res.status(400).json({ message: 'Price and stock must be non-negative' });
    }
    
    const image = req.file ? req.file.filename : 'sample-teddy.jpg';

    const product = new Product({
      name: name.trim(),
      description: description.trim(),
      price: parseFloat(price),
      image,
      category: category.trim(),
      stock: stock ? parseInt(stock) : 0
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid product ID format' });
    }
    
    const { name, description, price, category, stock, image } = req.body;
    const updateData = {};
    
    // Only update provided fields
    if (name) updateData.name = name.trim();
    if (description) updateData.description = description.trim();
    if (price !== undefined) {
      if (price < 0) {
        return res.status(400).json({ message: 'Price must be non-negative' });
      }
      updateData.price = parseFloat(price);
    }
    if (category) updateData.category = category.trim();
    if (stock !== undefined) {
      if (stock < 0) {
        return res.status(400).json({ message: 'Stock must be non-negative' });
      }
      updateData.stock = parseInt(stock);
    }
    
    // Handle image updates (file upload or URL)
    if (req.file) {
      updateData.image = req.file.filename;
    } else if (image) {
      updateData.image = image;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid product ID format' });
    }
    
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully', deletedProduct: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};