import React, { useState } from "react";
import ModalLogin from "./Modallogin";

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
// function write token to local storage
function writeTokenToLocalStorage(token) {
  localStorage.setItem("token", token);
}

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Perform login logic here

    // setLoggedIn(true);
    // setError("");
    if (email === "" || password === "") {
      setError("Please fill all fields");
    } else {
      fetchData("http://localhost:8000/user/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((data) => {
          console.log("Success:", data);
          writeTokenToLocalStorage(data.token);   
          setLoggedIn(true);
          setError("");
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.message);
        });
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="grid mt-0 mr-auto mb-0 ml-auto grid-cols-1 lg:max-w-screen-xl gap-0 lg:grid-cols-12">
        <div
          className="w-full mt-6 mr-auto mb-0 ml-auto pt-4 pr-4 pb-4 pl-4 col-span-1 lg:col-span-4 xl:p-12 sm:w-2/4
          lg:w-full"
        >
          <div className="flex items-center justify-start"></div>
          <p className="font-light text-xl text-gray-800 mt-6 mr-0 mb-4 ml-0 text-left">
            Log in to your account
          </p>
          <div className="pt-0 pr-0 pb-1 pl-0 space-y-4">
            <div className="block">
              <p className="text-gray-700 font-medium text-xs mt-0 mr-0 mb-1 ml-0 block">
                Your Email
              </p>
              <input
                value={email}
                onChange={handleChangeEmail}
                type="email"
                placeholder="Ex. joshi@bond.com"
                className="w-full rounded-md border-2 hover:border-purple-700
                pt-2 pr-3 pb-2 pl-3"
              />
            </div>
            <div className="block">
              <p className="text-gray-700 font-medium text-xs mt-4 mr-0 mb-1 ml-0 block">
                Your Password
              </p>
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border-2 hover:border-purple-700 pt-2
                pr-3 pb-2 pl-3"
              />
            </div>
            <div className="flex mt-4 mr-0 mb-0 ml-0 items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" />
                <p className="text-gray-700 font-medium w-20 text-xs mt-0 mr-4 mb-0 ml-2 block cursor-pointer">
                  Remember me
                </p>
              </div>

              {!loggedIn && (
                <div>
                  <button
                    onClick={handleLogin}
                    className="rounded-md w-full pt-2.5 pr-3.5 pb-2.5 pl-3.5 text-white bg-purple-900 hover:bg-blue-600"
                  >
                    Login
                  </button>
                  {error && (
                    <p className="text-red-600 text-center mt-4">{error}</p>
                  )}
                  {/* yaha pe error modal lga skte h */}
                </div>
              )}
              {loggedIn && <ModalLogin />}
            </div>
          </div>
          <div className="mt-6 mr-0 mb-6 ml-0 space-y-2">
            <p className="text-xs text-gray-600 inline">
              Don't have an account?
            </p>
            <a
              className="text-xs inline text-purple-700 hover:text-black"
              href="caa"
            >
              Create an account
            </a>
            <a
              className="text-xs mt-2 mr-0 mb-0 ml-0 block text-purple-700 hover:text-black"
              href="fgp"
            >
              Forgot password?
            </a>
            <a
              className="text-xs mt-3 mr-0 mb-0 ml-0 block text-purple-700 hover:text-black"
              href="pp"
            >
              Privacy & Terms
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8 h-full">
          <img src="./Images/login.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Login;
