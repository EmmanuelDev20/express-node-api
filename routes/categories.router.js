const express = require('express');
const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId
  });
})

router.get('/', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000
  });
})

module.exports = router;
