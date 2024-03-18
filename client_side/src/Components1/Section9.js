import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



function Section9() {
  const [products, setProducts] = useState([]);

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

  const truncateDescription = (description) => {
    const maxLength = 100; // Maximum characters allowed
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...'; // Truncate description and add "..."
    }
    return description;
  };

  return (
    <div>
      <Header/>
    
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={product._id} className="m-4 h-96 w-60 md:w-80">
          <Link to={`/ticketdetail/${product._id}`} className="block h-full">
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer h-full">
              <div className="block w-full h-full">
                {/* Retrieve image dynamically */}
                {/* <img src={product.imageURL} alt="Product Image" />
                <p>{product.imageURL}</p> */}
                <img alt="blog photo" src="./Images/upcoming img 1.png" class="object-cover w-full max-h-40"/>

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

<Footer/>
    </div>
    
  );
}

export default Section9;
