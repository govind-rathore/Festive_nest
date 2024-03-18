

import React from 'react';
const Spacer = ({ height }) => <div style={{ height }} />;

    function Volcompo1() {
        const handleLoginRedirect = (url) => {
            // Redirect to the specified URL
            window.location.href = url;
        };
    

    return (
        


<div style={{backgroundColor: '#2A0044'}} class="w-full p-12 bg-white">
<div class="bg-white dark:bg-gray-800 ">
    
        
        
    

    
<div class="bg-white dark:bg-gray-800 overflow-hidden relative">
    <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
            Join Hands, Change Lives: Volunteer Now!
            </span>
            <span class="block text-indigo-500">
                It&#x27;s today or never.
            </span>
        </h2>
        <p class="text-xl mt-4 text-gray-400">
        "Join Hands, Change Lives: Volunteer Now" encapsulates the ethos of our initiative, inviting individuals to unite in making a tangible difference.

        </p>
        
    </div>
    <img src="./images/voluntillus (1).png" class="absolute top-0  right-10 hidden h-full max-w-1/2 lg:block"/>
</div>

    <Spacer height="2px" />
</div>
    
        <div style={{backgroundColor: '#fffff'}} class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-50 w-100 md:w-8=90">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="./images/v1 (2).jpg" class="object-cover w-full max-h-50"/>
                    
                </a>
            </div>
            <div  class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-50 w-100 md:w-8=90">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="./images/v1 (1).jpg" class="object-cover w-full max-h-50"/>
                    
                </a>
            </div>
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-50 w-100 md:w-8=90">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="./images/v1 (3).jpg" class="object-cover w-full max-h-50"/>
                    
                    
                </a>
            </div>
            
            
            
            
        </div>
        <div style={{backgroundColor: '#2A0044'}} class="px-6 py-6 bg-purple-700 rounded-lg dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div class="xl:w-0 xl:flex-1">
                <h2 class="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
                Empower Change: Explore Volunteering Opportunities Today!
                </h2>
                <p class="max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
                Explore a world of meaningful engagement through our website's volunteering options. Whether you're passionate about environmental conservation, community outreach, or education, we offer diverse avenues for you to make a difference. Join us in creating positive impact and forging connections that last a lifetime
                </p>
            </div>
            <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <div style={{backgroundColor: '#fffff'}} class="mt-5 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button onClick={() => handleLoginRedirect('/volfom')} style={{backgroundColor: '#fffff'}} class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400">
                        Volunteer Now
                    </button>
                </div>
                <p class="mt-3 text-sm leading-5 text-indigo-200">
                Be the Change: Make a difference in your community and beyond by lending your time and talents to causes that matter. 
                </p>
                <p class="text-sm leading-2 text-indigo-200">
                
                From local initiatives to global campaigns, our website empowers individuals like you to be the change they wish to see in the world. Start your volunteering journey today!
                </p>
            </div>

        </div>
            
     </div>
    
         

)
};


export default Volcompo1 ;
