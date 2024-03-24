import React, { useState } from "react";

import Modalcreteacc from "./Modalcreteacc";
// Reusable function to fetch data from a given URL with optional request parameters
async function fetchData(url, params = {}) {
  try {
    const response = await fetch(url, params);
    const responseData = await response.json(); // Wait for the JSON data to be parsed
    if (!responseData.status) {
      throw new Error(responseData.message);
    }
    return responseData;
  } catch (error) {
    throw error; // Rethrow the error for the caller to handle
  }
}
const Createacccompo1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleModal = async () => {
    // setShowModal(!showModal);
    if (username === "" || email === "" || password === "") {
      setError("Please fill all fields");
    } else {
      fetchData("http://localhost:8000/user/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      })
        .then((data) => {
          console.log("Success:", data);
          setShowModal(true);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.message);
        });
    }
  };
  return (
    <div>
      <div>
        <div className="grid mt-0 mr-auto mb-0 ml-auto grid-cols-1 lg:max-w-screen-xl gap-0 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8 h-full"></div>
        </div>
      </div>
      <div className="bg-fuchsia-900 pt-24 pr-3 pb-24 pl-3">
        <div
          fontFamily="Arial"
          className="pt-0 pr-3 pb-0 pl-3 mr-auto ml-auto max-w-7xl sm:px-5 lg:px-12"
        >
          <div className="bg-white rounded-xl sm:p-1.5">
            <div className="grid lg:gap-x-10 lg:grid-cols-12 lg:gap-y-8 grid-cols-1">
              <div className="hidden lg:col-span-5 lg:block">
                <img src="./Images/create5.png" />
              </div>
              <div className="pt-8 pr-8 pb-8 pl-8 lg:col-span-7">
                <p
                  fontSize="2xl"
                  className="text-gray-900 text-left font-extrabold leading-snug tracking-tight mb-4
              md:text-4xl"
                >
                  Create Account
                </p>
                <div>
                  <div className="grid grid-cols-2 gap-4"></div>
                </div>
                <div>
                  <div className="w-full mt-3 mr-auto mb-3 ml-auto">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="email"
                        placeholder="Ex: james@bond.com"
                        className="focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full mt-0 mr-auto mb-3 ml-auto">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Password
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="password"
                        placeholder="********"
                        className="focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full mt-0 mr-auto mb-4 ml-auto">
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="text"
                        placeholder="ex: user1"
                        className="focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="hover:bg-gray-600 rounded-md text-xl pt-3 pr-3 pb-3 pl-3 bg-fuchsia-900
                font-semibold text-white w-full text-center shadow-violet-900/50"
                  >
                    Create Account
                  </button>
                  {error.length > 0 ? (
                    <p className="text-red-600 text-center mt-4">{error}</p>
                  ) : null}
                  {showModal && <Modalcreteacc />}
                  <div
                    className="flex items-center justify-start border-t-2 border-gray-100 mt-6 mr-0 mb-0 ml-0 pt-6 pr-0 pb-0
                pl-0"
                  >
                    <p className="text-sm text-gray-800">
                      Already have an account?
                    </p>
                    <a className="text-sm text-purple-900 mt-0 mr-0 mb-0 ml-2">
                      Logn In
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Createacccompo1;
