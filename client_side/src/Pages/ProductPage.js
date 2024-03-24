import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Section8() {
  const [products, setProducts] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data.data.slice(0, 8)); // Limit the number of products to 8
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Define array of image paths
    const images = [
      '/Images/upcoming img 3.png',
      '/Images/upcoming img 4.png',
      '/Images/upcoming img 8.png',
      '/Images/upcoming img 5.png',
      '/Images/upcoming img 2.png',
      '/Images/upcoming img 6.png',
      '/Images/upcoming img 7.png',
      // Add more image paths as needed
    ];
    setImagePaths(images);
  }, []);

  const truncateDescription = (description) => {
    const maxLength = 100; // Maximum characters allowed
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...'; // Truncate description and add "..."
    }
    return description;
  };

  return (
    <div class="w-full p-12 ">
      <div class="flex items-end justify-between mb-12 header">
        <div class="title">
          <p class="mb-4 text-4xl font-bold text-gray-800">Upcoming Events</p>
          
        </div>
        
      </div>
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={product._id} className="m-4 h-96 w-60 md:w-80">
          <Link to={`/ticketdetail/${product._id}`} className="block h-full">
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer h-full">
              <div className="block w-full h-full">
                {/* Retrieve image dynamically */}
                <img src={imagePaths[index % imagePaths.length]} alt={`Product Image ${index + 1}`} className="object-cover w-full max-h-40" />

                <div className="w-full p-4 bg-white dark:bg-gray-800">
                  <p className="font-medium text-indigo-500 text-md">{new Date(product.Event_Date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{product.Event_Name}</p>
                  <p className="font-light text-gray-400 dark:text-gray-300 text-md">{truncateDescription(product.Event_Description)}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* Render a new row after every 4 products */}
      {products.length > 0 && <div key={`row-${products.length}`} className="w-full" />}
    </div>
    </div>
  
  );
}

export default Section8;
