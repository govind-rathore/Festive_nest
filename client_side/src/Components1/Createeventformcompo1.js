import React, { useState } from "react";

function Createeventformcompo1({ sendToParent, fromParent }) {
  const formData = {
    eventName: "",
    organizerContactNumber: "",
    hostedBy: "",
    eventType: "",
    volunteersNeeded: "",
    startTime: "",
    endTime: "",
    eventLocation: "",
    emailAddress: "",
    sponsorsName: "",
    eventDate: "",
    ...fromParent,
  };

  const handleChange = (event) => {
    console.log("value", event.target.value);
    console.log("name", event.target.name);
    const { name, value } = event.target;
    const newFormData = { ...formData, [name]: value };
    sendToParent(newFormData);
  };

  function swaptext_form_layout_wizard3(el) {
    // Get the text from the clicked element
    const targetText = el.innerText;

    // Set the text to the target element
    document.getElementById(
      "drop-down-content-setter_form_layout_wizard3"
    ).innerText = targetText;

    // Toggle the "hidden" class of the drop-down div
    document.getElementById("drop-down-div").classList.toggle("hidden");
  }

  function showDropDownMenu_form_layout_wizard3(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext_form_layout_wizard3(el) {
    const targetText = el.target.innerText;
    document.getElementById(
      "drop-down-content-setter_form_layout_wizard3"
    ).innerText = targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");
  }
  function showDropDownMenuOne_form_layout_wizard3(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone_form_layout_wizard3(el) {
    const targetText = el.target.innerText;
    document.getElementById(
      "drop-down-content-setter-one_form_layout_wizard3"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div-one_form_layout_wizard3")
      .classList.toggle("hidden");

    const newFormData = { ...formData, eventType: targetText };
    sendToParent(newFormData);
  }
  function showDropDownMenutwo_form_layout_wizard3(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo_form_layout_wizard3(el) {
    const targetText = el.target.innerHTML;
    document.getElementById(
      "drop-down-content-setter-two_form_layout_wizard3"
    ).innerHTML = targetText;
    document
      .getElementById("drop-down-div-two_form_layout_wizard3")
      .classList.toggle("hidden");
  }

  return (
    <>
      <div className="mt-10 px-7">
        <p className="text-xl font-semibold leading-tight text-gray-800">
          Event Details
        </p>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Event Name
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              value={formData.eventName}
              onChange={handleChange}
              name="eventName"
            />
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Organizer contact number
              </p>
              <input
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                value={formData.organizerContactNumber}
                onChange={handleChange}
                name="organizerContactNumber"
              />
            </div>
          </div>

          <div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Hosted By
              </p>
              <input
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                value={formData.hostedBy}
                onChange={handleChange}
                name="hostedBy"
              />
            </div>

            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Hosted By
              </p>
              <input
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                value={formData.hostedBy}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Event Type
            </p>
            <div className="relative top-1">
              <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                <button
                  onClick={showDropDownMenuOne_form_layout_wizard3}
                  className="relative flex items-center justify-between w-full px-5 py-4 "
                >
                  <span
                    className="pr-4 text-sm font-medium text-gray-600"
                    id="drop-down-content-setter-one_form_layout_wizard3"
                  >
                    Event Type
                  </span>
                  <svg
                    id="rotate1"
                    className="absolute z-10 cursor-pointer right-5"
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0.75L5 5.25L9.5 0.75"
                      stroke="#4B5563"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                  id="drop-down-div-one_form_layout_wizard3"
                >
                  <a href="javascript:void(0)" className="hover">
                    <p
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptextone_form_layout_wizard3}
                    >
                      Offline
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptextone_form_layout_wizard3}
                    >
                      Online
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Volunteers Needed
            </p>
            <input
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              value={formData.volunteersNeeded}
              onChange={handleChange}
              name="volunteersNeeded"
            />
          </div>

          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Start Time
            </p>
            <div className="mt-4">
              <input
                type="time"
                className="w-full p-3 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                value={formData.startTime}
                onChange={handleChange}
                name="startTime"
              />
            </div>
          </div>

          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              End Time
            </p>
            <div className="mt-4">
              <input
                type="time"
                className="w-full p-3 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                value={formData.endTime}
                onChange={handleChange}
                name="endTime"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            Event Location
          </p>
          <input
            type="text"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="Enter location..."
            value={formData.eventLocation}
            onChange={handleChange}
            name="eventLocation"
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p class="text-base font-medium leading-none text-gray-800">
            <i class="fas fa-envelope mr-2"></i>Email Address
          </p>
          <input
            class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            value={formData.emailAddress}
            onChange={handleChange}
            name="emailAddress"
          />
          <p class="mt-3 text-xs leading-[15px] text-gray-600"></p>
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            Sponsors Name
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            value={formData.sponsorsName}
            onChange={handleChange}
            name="sponsorsName"
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            Event Date
          </p>
          <input
            type="date"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            value={formData.eventDate}
            onChange={handleChange}
            name="eventDate"
          />
          <p className="mt-3 text-xs leading-[15px] text-gray-600"></p>
        </div>
      </div>
    </>
  );
}

export default Createeventformcompo1;
