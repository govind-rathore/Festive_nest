import React from 'react';

const Searchbarcompo1 = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <img src="./images/finabgofsearch.png" alt="Background" className="absolute inset-0 w-full h-900 object-cover z-0" />
      <div className="absolute bottom 70/2 top-90/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="mb-10 text-center">
          <p className="text-4xl font-bold text-white">Find Your Events Now !!</p>
        </div>
        <div className="w-96">
          <div className="mb-5 relative w-full">
            <input type="search" id="search-dropdown" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border-gray-300 border" placeholder="Search events..." required />
            <button type="submit" className="absolute top-0 right-0 p-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbarcompo1;
