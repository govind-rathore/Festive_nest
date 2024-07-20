import React from "react";

export default function Section1() {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-16">
            <div className=" w-full  relative flex items-center justify-center">
                <img src="./Images/backgroun1.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="./images/homepage.jpg" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">Festive Nest: Your Gateway to Unforgettable Events!</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                    Effortlessly design tickets that reflect your event's style and generate QR codes for seamless entry management. Make ticketing a breeze with Festive Nest!
                    </p>
                   
                </div>
            </div>
        </div>
    );
}
