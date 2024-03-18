import React from 'react';
function Designcompo1() {
    const handleLoginRedirect = () => {
        // Redirect to the login page
        window.location.href = '/working';
    };

   
    return (
<div class="bg-white dark:bg-gray-800 overflow-hidden relative">
    <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
            The Freedom to Design the
            </span>
            <span class="block text-indigo-900">
            Ticket&#x27;s You Want
            </span>
        </h2>
        <p class="text-xl mt-4 text-gray-400">
        Whether you're organizing a concert, conference, or fundraiser, our platform enables you to create visually captivating tickets that resonate with your audience. From elegant designs to vibrant themes, we provide the tools you need to make every ticket as unique as your event.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div style={{ backgroundColor: '#2A0044' }} class="mt-12 inline-flex rounded-md shadow">
                
            <button  onClick={handleLoginRedirect} style={{ backgroundColor: '#2A0044' }}  type="button" href="working"class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Let's Design
                </button>
            </div>
        </div>
    </div>
    <img src="./images/Designer girl-cuate 1.png" class="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block"/>
</div>
 );
}

export default Designcompo1;
