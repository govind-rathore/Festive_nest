import React from "react";

   
function Profilecompo1() {
    const handleLoginRedirect = (url) => {
        // Redirect to the specified URL
        window.location.href = url;
    };
    return (
        <div>
            {/* Code block starts */}
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
                <div>
                    <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">User Profile</h4>
                    <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                        <li className="flex items-center mr-4">
                            <div className="mr-1">
                                
                            </div>
                            
                        </li>
                        <li className="flex items-center mr-4 mt-4 md:mt-0">
                            <div className="mr-1">
                                
                            </div>
                            
                        </li>
                        <li className="flex items-center mt-4 md:mt-0">
                            <div className="mr-1">
                               
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="mt-6 md:mt-0">
                    <button onClick={() => handleLoginRedirect('/')} className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">Back</button>
                     <button onClick={() => handleLoginRedirect('/mlcs')} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Save Changes</button>
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Profilecompo1;
