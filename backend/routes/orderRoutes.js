const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus
} = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(auth);

router.post('/', createOrder);
router.get('/', getUserOrders);
router.get('/:id', getOrder);
router.put('/:id/status', updateOrderStatus);

module.exports = router;