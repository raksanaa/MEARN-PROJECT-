const Order = require('../models/Order');
const Product = require('../models/Product');

// Create new order
const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress, paymentMethod } = req.body;

    // Validation
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item' });
    }

    if (!totalAmount || totalAmount <= 0) {
      return res.status(400).json({ message: 'Invalid total amount' });
    }

    // Validate and populate items
    const orderItems = [];
    let calculatedTotal = 0;

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(400).json({ message: `Product not found: ${item.productId}` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }

      const orderItem = {
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.image
      };

      orderItems.push(orderItem);
      calculatedTotal += product.price * item.quantity;

      // Update product stock
      product.stock -= item.quantity;
      await product.save();
    }

    // Create order
    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalAmount: calculatedTotal,
      shippingAddress,
      paymentMethod: paymentMethod || 'credit_card'
    });

    // Populate order details
    const populatedOrder = await Order.findById(order._id)
      .populate('user', 'name email')
      .populate('items.product', 'name price image');

    res.status(201).json({
      success: true,
      order: populatedOrder
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user orders
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.product', 'name price image')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single order
const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('items.product', 'name price image');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if order belongs to user
    if (order.user._id.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if order belongs to user
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    order.status = status;
    await order.save();

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus
};