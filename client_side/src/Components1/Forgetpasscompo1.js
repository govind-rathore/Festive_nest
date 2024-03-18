
import React, { useState } from 'react';
import Modalforgetsuccpass from './Modalforgetsuccpass';
function Forgetpasscompo1() {
  const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
  
 
    const handleLoginRedirect = () => {
        // Redirect to the login page
        window.location.href = '/lp';
    };


    return (
        <div className="pt-24 pr-4 pb-24 pl-4">
    <div className="mt-32 mr-auto mb-3 ml-auto px-4 sm:px-6 md:px-8 max-w-3xl">
      <div className="max-w-md">
        <p className="text-lg font-bold text-gray-900">Change Passsword</p>
        <p lineheight="6" className="mt-2 text-sm font-medium text-gray-500">Please enter your current password to change your
            password.</p>
      </div>
    </div>
    <div className="mt-0 mr-auto mb-32 ml-auto px-4 sm:px-6 md:px-8 max-w-3xl">
      <div className="space-y-5 max-w-lg">
        <div>
          <label className="text-base font-medium text-gray-900">Current Password</label>
          <div className="mt-2.5">
            <input type="password" placeholder="************" className="block placeholder-gray-500 transition-all
                duration-200 border border-gray-400 focus:outline-none focus:border-blue-600 caret-blue-600 w-full
                text-black bg-white rounded-md"/>
          </div>
        </div>
        <div>
          <label className="text-base font-medium text-gray-900">New Password</label>
          <div className="mt-2.5">
            <input type="password" placeholder="************" className="block placeholder-gray-500 transition-all
                duration-200 border border-gray-400 focus:outline-none focus:border-blue-600 caret-blue-600 w-full
                text-black bg-white rounded-md"/>
          </div>
        </div>
        <div>
          <label className="text-base font-medium text-gray-900">Confirm New Password</label>
          <div className="mt-2.5">
            <input type="password" placeholder="************" className="block placeholder-gray-500 transition-all
                duration-200 border border-gray-400 focus:outline-none focus:border-blue-600 caret-blue-600 w-full
                text-black bg-white rounded-md"/>
          </div>
        </div>
        <hr className="my-4"/>
        <div className="flex items-center justify-end">
          <button onClick={() => handleLoginRedirect('/lp')} fontfamily="Arial" type="submit" className="border inline-flex border-gray-400 hover:text-white
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 justify-center
              rounded-md py-2 px-4 bg-white text-sm font-medium text-gray-700 shadow-sm mr-3">Cancel</button>
          <button onClick={toggleModal} fontfamily="Arial" type="submit" className="inline-flex border border-indigo-500 hover:text-indigo-700
              hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 justify-center
              rounded-md py-2 px-4 bg-purple-900 text-sm font-medium text-white shadow-sm">Update Password</button>{showModal && <Modalforgetsuccpass/>}
        </div>
      </div>
    </div>
  </div>
    );
  };
  export default Forgetpasscompo1;