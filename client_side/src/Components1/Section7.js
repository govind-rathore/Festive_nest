const handleLoginRedirect = () => {
    // Redirect to the login page
    window.location.href = '/cremp';
  };
const Section7 = () => {
    // Please use 'useState()' to implement Navbar functionality
      return (
        
<div style={{ backgroundColor: '#2A0044' }}  class="px-6 py-6 bg-purple-700 rounded-lg dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
    <div class="xl:w-0 xl:flex-1">
        <h2 class="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
        Create Memorable Moments: Your Event, Your Way
        </h2>
        <p class="max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
        Welcome to our platform where you can effortlessly list and manage your events, tailored to your unique vision. .
        </p>
    </div>
    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <div style={{ backgroundColor: '#fffff' }} class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button onClick={() => handleLoginRedirect('/cremp')}  style={{ backgroundColor: '#FFFFFF' }} class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-#2A0044 transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400">
                Create Event
            </button>
        </div>
        <p class="mt-3 text-sm leading-5 text-indigo-200">
        Elevate your event planning experience with our intuitive platform. Seamlessly create, showcase, and manage your events with ease, ensuring every detail reflects your style and exceeds expectations. Let's bring your vision to life, together
        </p>
        
    </div>
</div>

      );
}; 
export default Section7;