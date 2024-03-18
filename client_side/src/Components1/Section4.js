import React from "react";
const handleLoginRedirect = () => {
    // Redirect to the login page
    window.location.href = '/td';
  };

export default function Section4() {
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                       
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                        Design Your Tickets, Design Your Experience!
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                        Welcome to our platform, where designing your event tickets is as simple as a few clicks. Say goodbye to generic ticket templates and hello to personalized ticket designs that capture the spirit of your event.
                        </p>
                        <div className="w-56">
                            <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                              
                                <button onClick={() => handleLoginRedirect('/td')}  style={{ backgroundColor: '#2A0044' }} onclick="menuHandler1()" className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">
                                    Design Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                       
                        
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div style={{ backgroundColor: '#2A0044' }} className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Versatile Design Options</h2>
                                    
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Explore a wide range of design options to suit your event theme and branding. With customizable templates and elements, you have the flexibility to create tickets that reflect your unique style.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
