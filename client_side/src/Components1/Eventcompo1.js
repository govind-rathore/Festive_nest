import React, { useState } from "react";
const handleLoginRedirect = () => {
    // Redirect to the login page
    window.location.href = '/cefp';
  };
function Eventcompo1() {
    const [show, setShow] = useState(false);
    return (
        
<section>
    <div class="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
        <div class="flex flex-wrap -mx-8">
            <div class="w-full px-8 lg:w-1/2">
                <div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 class="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                    Join our platform and unleash your event-planning prowess. 
                    </h2>
                    <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                    Seamlessly create and list your events, from the grandest galas to intimate soirées. With our intuitive tools, your events will shine, connecting you with your audience like never before.
                    </p>
                    <div class="w-full md:w-1/3">
                        <button  onClick={() => handleLoginRedirect('/cefp')} User
style={{ backgroundColor: '#2A0044' }} type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Create Event
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full px-8 lg:w-1/2">
                <ul class="space-y-12">
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span User
style={{ backgroundColor: '#2A0044' }} class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-blue-50">
                                1
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                            Effortless Event Creation
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                            Seamlessly craft events of any scale, whether it's a grand gala or an intimate soirée, with our intuitive platform.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span User
style={{ backgroundColor: '#2A0044' }}  class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-blue-50">
                                2
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                            Enhanced Audience Engagement
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                            Utilize our intuitive tools to ensure your events shine, fostering meaningful connections with your audience like never before.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

    );
}

export default Eventcompo1;
