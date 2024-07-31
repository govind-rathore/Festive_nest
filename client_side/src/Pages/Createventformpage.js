import Createeventformcompo1 from "../Components1/Createeventformcompo1";
import Createeventformcompo2 from "../Components1/Createeventformcompo2";
import Createeventformcompo3 from "../Components1/Createeventformcompo3";
import Modalcreteven from "../Components1/Modalcreteven";
import Footer from "../Components1/Footer";
import Header from "../Components1/Header";
import React, { useState } from "react";

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
function timeToNumber(timeString) {
  var parts = timeString.split(":");
  var hours = parseInt(parts[0], 10);
  var minutes = parseInt(parts[1], 10);
  return hours + minutes / 60;
}
const Createventformpage = () => {
  const [formcompo1, setFormcompo1] = useState("");
  const [successEvent, setSuccessEvent] = useState(false);
  const [Error, setError] = useState(null);
  return (
    <div>
      {successEvent ? (
        <Modalcreteven />
      ) : (
        <>
          <Header />
          <Createeventformcompo1
            sendToParent={(newData) => {
              setFormcompo1(newData);
            }}
            fromParent={formcompo1}
          />
          <Createeventformcompo2 />
          <Createeventformcompo3
            sendToServer={(description) => {
              // check if the formcompo1 contains the all required fields
              console.log("local storage token", localStorage.getItem("token"));
              if (formcompo1 === "") {
                console.log("Please fill all fields");
                return;
              }
              fetchData("https://festive-nest-backend.onrender.com/event/createEvent", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                  name: formcompo1.eventName,
                  email: formcompo1.emailAddress,
                  contactNumber: formcompo1.organizerContactNumber,
                  hostedBy: formcompo1.hostedBy,
                  sponsersName: formcompo1.sponsorsName,
                  category: "musical",
                  type: formcompo1.eventType.toLowerCase(),
                  cost: "free",
                  isVolunteersNeed:
                    formcompo1.volunteersNeeded === "yes" ? true : false,
                  startTime: timeToNumber(formcompo1.startTime),
                  endTime: timeToNumber(formcompo1.endTime),
                  location: formcompo1.eventLocation,
                  date: formcompo1.eventDate,
                  description,
                }),
              })
                .then((data) => {
                  console.log("Success:", data);
                  setSuccessEvent(true);
                })
                .catch((error) => {
                  console.error("Error:", error);
                  setError(error);
                });
            }}
          />
          {Error && (
            <div>
              {<p className="text-red-600 text-center mt-4">{Error.message}</p>}
            </div>
          )}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Createventformpage;
