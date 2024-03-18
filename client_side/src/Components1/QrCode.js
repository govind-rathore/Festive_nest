function QrCode() {
  
  return (
    <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div class="container relative flex px-1 py-16 mx-auto">
        <div class="relative hidden sm:block sm:w-1/3 lg:w-1/2">
          <img
            src="/images/fingerprint img.png"
            class="max-w-xs m-auto md:max-w-sm max-w-full rounded border border-black"
          />
        </div>
        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-3/5">
          <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">QR Brilliance at Your Fingertips!</span>
          </h2>
          <p class="text-xl mt-4 text-gray-400">
            Festive Event empowers you to add a touch of security and
            convenience to your events. Create custom QR codes effortlessly and
            enhance your event check-in experience.
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
