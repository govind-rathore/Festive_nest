import React from "react";

const Aboutuscompo1 = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-24 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="./images/aboutus.png"
                    alt="About Us"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt="Image 2"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt="Image 3"
                    className="w-full rounded-2xl"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {Array.from({ length: 36 }).map((_, i) => {
                        const x = (i % 9) * 15 + 1.66667;
                        const y = Math.floor(i / 9) * 15 + 1.66667;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="1.66667"
                            fill="#3056D3"
                          />
                        );
                      })}
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                At FestiveNest, we believe in bringing people together to create unforgettable moments. Our platform is dedicated to making event planning effortless and enjoyable. Whether you're hosting a small gathering or a large-scale celebration, we're here to help you every step of the way.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                At FestiveNest, we're passionate about transforming your visions into reality. With our innovative tools and dedicated support, we empower you to craft events that reflect your unique style and personality. From weddings to corporate functions, we understand the importance of every detail and strive to exceed your expectations. Let's make your next event an extraordinary experience to remember.
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutuscompo1;
