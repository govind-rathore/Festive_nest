const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init upload
const upload = multer({
  storage: storage,
}).single('Image'); // Assuming 'Image' is the field name for the image in your form

const createProduct = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error uploading image" });
    } else {
      const body = req.body;
      body.Image = req.file ? req.file.filename : ''; // Store uploaded image filename in the body

      try {
        const product = new Product(body);
        const result = await product.save();
        res.status(201).json({ message: "created", result });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
}

// Your other controller functions remain unchanged





const getProducts = async (req, res) => {
    try {
        const results = await Product.find({});
        // Map through each product to add imageURL
        const productsWithImage = results.map(product => {
            const { Image, ...productData } = product.toObject();
            // Construct the URL for the image based on the file path
            const imageURL = `/uploads/${Image}`; // Adjust the URL format based on your server setup
            return { ...productData, imageURL };
        });
        res.status(200).json({ message: "success", data: productsWithImage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}


const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findById(id);
        res.status(200)
            .json({ message: "success", data: result });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}

const updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updateDoc = { $set: { ...body } };
        updateDoc.updatedAt = Date.now();
        await Product.findByIdAndUpdate(id, updateDoc);
        res.status(200)
            .json({ message: "updated" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        res.status(200)
            .json({ message: "deleted" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}
module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById
}