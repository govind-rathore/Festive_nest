const handleLoginRedirect = () => {
  // Redirect to the login page
  window.location.href = '/php';
};
const Section3 = () => {
    // Please use 'useState()' to implement Navbar functionality
      return (
          <div>

<div style={{ backgroundColor: '#2A0044' }}  className="bg-white mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20">
<div rounded="md" className="shadow-xl pt-8 pr-8 pb-8 pl-8 sm:p-16">
<div className="flex flex-col lg:flex-row">
<div className="lg:mb-0 lg:w-1/2 lg:pr-5 mb-6">
<div>
<p style={{ color: '#FFFFFF' }} className="block text-3xl font-bold tracking-tight text-gray-900 leading-6 font-sans sm:text-4xl">Building Your Celebrations</p>
<p style={{ color: '#FFFFFF' }} className="inline text-3xl font-bold tracking-tight text-gray-900 font-sans sm:text-4xl sm:leading-none">Host Unforgettable Virtual Events With</p>
<p style={{ color: '#FFFFFF' }} className="inline text-#FFFFFF text-3xl font-bold tracking-tight font-sans sm:text-4xl
    sm:leading-none"> Festive Nest</p>
</div>
</div>
<div className="lg:w-1/2">
<p style={{ color: '#FFFFFF' }} className="mb-4 text-base text-left text-gray-700">Festive Nest is your go-to platform for effortlessly hosting and discovering events. From intimate gatherings to grand celebrations, our user-friendly interface and extensive listings make event planning a breeze. Welcome to your nest of endless possibilities!</p>
<button onClick={() => handleLoginRedirect('/php')} style={{ color: '#FFFFFF' }} className="w-3/12 text-blue-#FFFFFF text-center flex font-semibold items-center transition-colors duration-200
  hover:text-blue-900">Host Now</button>
</div>
</div>
</div>
</div></div>
      );
    }; 
    export default Section3;