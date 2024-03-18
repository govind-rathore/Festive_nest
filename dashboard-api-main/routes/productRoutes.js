


const ensureAuthenticated = require('../auth');
const { createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteById } = require('../conrollers/productController');

const router = require('express').Router();

router.post('/',  createProduct); // Secure route for creating a product
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', ensureAuthenticated, updateProductById); // Secure route for updating a product
router.delete('/:id', ensureAuthenticated, deleteById); // Secure route for deleting a product

module.exports = router;
