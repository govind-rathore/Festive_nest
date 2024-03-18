
import React from 'react';
import  QRCode  from 'qrcode';
import { useState } from 'react';

function Qrcompo1() {
  const[url,setUrl]=useState('')
const [qrcode, setQrcode]= useState('')

const GenerateQRCode = () => {
  QRCode.toDataURL(url,{
    width:300,
    margin:2,
    
  }, (err,url) => {
    if(err) return console.error(err)

    console.log(url)
    setQrcode(url)
  })
}


return (
  <div class="flex flex-wrap w-full">
  <div class="flex flex-col w-full md:w-1/2">
  <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
        <a href="/" className="p-4 text-xl font-bold text-white" style={{backgroundColor: '#2A0044'}}>


                Back
            </a>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p class="text-3xl text-center">
                Welcome, Create Your QR Code.
            </p>

            <div class="flex flex-col pt-4">
                    <div class="flex relative ">
            
    <input 
        type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter URL"
       
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}/>
        </div>
        </div>
        
        
<button  style={{backgroundColor: '#2A0044'}} onClick={GenerateQRCode} type="button" class="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
Generate QR Code
</button>

   
    {qrcode && <>
      <img src={qrcode} class ="h-21 w-21"/>
      <a href={qrcode} download="qrcode.png">Download</a>
    </>}
    </div>
    </div>
    <div class="w-1/2 shadow-2xl w-500 h-350">
                <img class="hidden object-cover w-500 h-350  w-full h-screen md:block" src="./Images/qrcompo 2 img.png"/>
            </div>
  </div>
)
}


export default Qrcompo1;