import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function formatTime(timeString) {
  const date = new Date(timeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert midnight (0) to 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function Ticketdetailcompo() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://festive-nest-backend.onrender.com/event/${productId}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  
  

  return (
    <div>
    <Header/>
    <div className="overflow-y-hidden">
    <div className="xl:mx-auto xl:container xl:px-20 md:px-6 px-4 py-12">
      <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
        <div>
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            {product.name}
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            {product.description}
          </p>
          <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <img
              src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
              alt="ongoing meeting"
              className="w-full obejct-fit object-center object-fill h-full"
            />
          </div>
          <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 relative">
                <div className="flex-shrink-0 z-20 w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img src={`${process.env.PUBLIC_URL}/Images/time1.png`} alt="clock" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
<h2 className="text-lg font-semibold leading-4 text-gray-800">
  Event Starting Time
</h2>
<p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
{formatTime(product.startTime)} onwards.
</p>
</div>

            </div>
            {/* Add more details as needed */}
            <div className="flex items-center">
            <div className="w-16 h-16 relative">
              <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <img src={`${process.env.PUBLIC_URL}/Images/location.png`} alt="Friendly" />
              </div>
            </div>
            <div className="flex items-start flex-col ml-6 pt-8">
              <h2 className="text-lg font-semibold leading-4 text-gray-800">
                Event Location
              </h2>
              <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
              {product.location}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 relative">
              <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <img src={`${process.env.PUBLIC_URL}/Images/hosted.png`} alt="Creative" />
              </div>
            </div>
            <div className="flex items-start flex-col ml-6 pt-8">
              <h2 className="text-lg font-semibold leading-4 text-gray-800">
                Event Hosted By
              </h2>
              <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
              {product.hostedBy}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 relative">
              <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <img src={`${process.env.PUBLIC_URL}/Images/date.png`} alt="Achievments" />
              </div>
            </div>
            <div className="flex items-start flex-col ml-6 pt-8">
<h2 className="text-lg font-semibold leading-4 text-gray-800">
  Event Date
</h2>
<p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
  {new Date(product.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
</p>
</div>

          </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-3/5 xl:w-1/3 w-25 lg:mt-0 mt-6 ">
          <img
           src={`${process.env.PUBLIC_URL}/Images/holiposters.jpg`}
            alt="ongoing meeting"
            className="w-full obejct-fit object-center object-fill h-full"
          />
        </div>
      </div>
    </div>

    <div className="pt-16">
      <div className="py-12 bg-gray-100">
        <div className="max-w-8xl mx-auto container">
          <div
            tabIndex={0}
            aria-label="group of cards"
            className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between"
          >
            <div
              tabIndex={0}
              aria-label="card 1"
              className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
            >
              <a
                href="https://maps.google.com/maps?q=Indore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div
                    style={{ backgroundColor: "#2A0044" }}
                    className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"
                  >
                    <img src={`${process.env.PUBLIC_URL}/Images/locationfinal.png`} alt="drawer" />
                  </div>
                </div>
                <h4
                  tabIndex={0}
                  className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                >
                  Location
                </h4>
              </a>
            </div>

            <div
              tabIndex={0}
              aria-label="card 2"
              className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
            >
              <div className="w-20 h-20 relative ml-6">
                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                <div
                  style={{ backgroundColor: "#2A0044" }}
                  className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG2.svg"
                    alt="check"
                  />
                </div>
              </div>
              <h4
                tabIndex={0}
                className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
              >
                Organizer Contact
                <br />
                <a href="tel:+9198765XXXXX">{product.contactNumber}</a>
              </h4>
            </div>

            {/* Add more cards as needed */}
            <div
            tabIndex={0}
            aria-label="card 3"
            className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
          >
            <div className="w-20 h-20 relative ml-6">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
              <a href= {'www.google.com'}>
                {" "}
                {/* Replace "https://www.ticketbookingwebsite.com" with the actual URL of the ticket booking website */}
                <div
                  style={{ backgroundColor: "#2A0044" }}
                  className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG3.svg"
                    alt="html tag"
                  />
                </div>
              </a>
            </div>
            <h4
              tabIndex={0}
              className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
            >
              Ticket Booking Website
              <br />
            </h4>
          </div>

          <div
            tabIndex={0}
            aria-label="card 4"
            className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
          >
            <div className="w-20 h-20 relative ml-6">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
              <a href="/volap">
                {" "}
                {/* Change "/volunteer-apply" to the actual URL of the destination page */}
                <div
                  style={{ backgroundColor: "#2A0044" }}
                  className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG4.svg"
                    alt="monitor"
                  />
                </div>
              </a>
            </div>
            <h4
              tabIndex={0}
              className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
            >
              Volunteer Apply
              <br />
            </h4>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  );
}

export default Ticketdetailcompo;
