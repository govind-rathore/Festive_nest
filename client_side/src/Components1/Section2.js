import React from "react";
const handleLoginRedirect = () => {
    // Redirect to the login page
    window.location.href = '/qr';
};

export default function Section2() {
    return (    
        <div class="bg-white dark:bg-gray-800 overflow-hidden relative">
            <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span class="block">
                    Empowering Connectivity: Generate QR Codes Effortlessly
                    </span>
                    
                </h2>
                <p class="text-xl mt-4 text-gray-400">
                Unlock seamless connectivity with our intuitive QR code generation solution. Create QR codes instantly to share information, links, and more, simplifying communication across devices and platforms.
                </p>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class="mt-12 inline-flex rounded-md shadow">
                        <button  onClick={() => handleLoginRedirect('/qr')} style={{ backgroundColor: '#2A0044' }} type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Generate Now
                        </button>
                    </div>
                </div>
            </div>
            <img src="./images/QR-Code-Generator main.webp" class="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block"/>
        </div>
        
    );
}