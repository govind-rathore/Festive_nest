import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const handleLoginRedirect = () => {
  // Redirect to the login page
  window.location.href = '/sec9';
};

function Section8() {
  const [getAllEvents, setGetAllEvents] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://festive-nest-backend.onrender.com/event/getAllEvents`);
        setGetAllEvents(response.data.data.slice(0, 8)); // Limit the number of products to 8
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
      {getAllEvents.map((product, index) => (
        <div key={product._id} className="m-4 h-96 w-60 md:w-80">
          <Link to={`/ticketdetail/${product._id}`} className="block h-full">
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer h-full">
              <div className="block w-full h-full">
                {/* Retrieve image dynamically */}
                {/* <img src={product.imageURL} alt="Product Image" />
                <p>{product.imageURL}</p> */}
                <img src={imagePaths[index % imagePaths.length]} alt={`Product Image ${index + 1}`} className="object-cover w-full max-h-40" />

                <div className="w-full p-4 bg-white dark:bg-gray-800">
                  <p className="font-medium text-indigo-500 text-md">{new Date(product.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{product.name}</p>
                  <p className="font-light text-gray-400 dark:text-gray-300 text-md">{truncateDescription(product.description)}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* Render a new row after every 4 products */}
      {getAllEvents.length > 0 && <div key={`row-${getAllEvents.length}`} className="w-full" />}
    </div>
    <div style={{ backgroundColor: '#fffff' }} class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button onClick={() => handleLoginRedirect('/sec9')}  style={{ backgroundColor: '#FFFFFF' }} class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-#2A0044 transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outz  line-none focus:bg-purple-400">
                Load More Event
            </button>
        </div>
    </div>
  );
}

export default Section8;
