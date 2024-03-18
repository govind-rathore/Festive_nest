import React from "react";

function Volunteerformcompo1() {
  const handleLoginRedirect = (url) => {
    // Redirect to the specified URL
    window.location.href = url;
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div class="xl:w-10/12 w-full px-8">
          <div class="xl:px-24">
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Personal Information
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  This section collects basic personal details such as name,
                  date of birth, gender, nationality, address, email, and phone
                  number.
                </p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="firstName"
                    >
                      First name
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="firstName"
                      placeholder="John"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Last name
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="lastName"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label class="text-sm leading-none text-gray-800" for="dob">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your Date of Birth"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="gender"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                    >
                      <option value="" disabled selected>
                        Select your gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="state"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your state"
                    />
                  </div>
                </div>

                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="pincode"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your pincode"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="address"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your address"
                    ></textarea>
                  </div>
                </div>

                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="nationality"
                    >
                      Nationality
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your nationality"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Security
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  Here, applicants are required to set up a password and
                  security code for accessing their accounts securely.
                </p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="recoverEmail"
                    >
                      Recovery Email address
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="recoveryEmail"
                      placeholder="Your recovery email"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="altPhone"
                    >
                      Alternate phone number
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="altPhone"
                      placeholder="Your alternate phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Experience
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  This section allows applicants to showcase their relevant
                  skills and previous experiences that make them suitable for
                  the volunteer position.
                </p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        for="previousExperience"
                      >
                        Previous Volunteering Experience
                      </label>
                      <textarea
                        id="previousExperience"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Enter your previous volunteering experience"
                      ></textarea>
                    </div>
                  </div>

                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        for="qualification"
                      >
                        Qualifications
                      </label>
                      <textarea
                        id="qualification"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Enter your qualifications"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Availability
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  Applicants specify their availability hours per day and days
                  of the week they are available for volunteering.
                </p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        for="daysOfWeek"
                      >
                        Days of Week
                      </label>
                      <select
                        id="daysOfWeek"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      >
                        <option value="" disabled selected>
                          Select days
                        </option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                      </select>
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        for="timeOfDay"
                      >
                        Time of Day
                      </label>
                      <select
                        id="timeOfDay"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      >
                        <option value="" disabled selected>
                          Select time
                        </option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                        <option value="night">Night</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div class="xl:w-10/12 w-full px-8">
          <div class="xl:px-24">
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Other Information
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  This section includes additional details such as educational
                  qualifications, previous volunteering experience, and
                  motivation for joining the volunteer event.
                </p>
              </div>

              <div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="password"
                    >
                      What is your medical condition ?
                    </label>
                    <div class="relative">
                      <select
                        tabindex="0"
                        class="appearance-none w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="password"
                      >
                        <option value="" disabled selected>
                          Select your medical condition
                        </option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                        <option value="Excellent with some limitations">
                          Excellent with some limitations
                        </option>
                        <option value="Good with occasional limitations">
                          Good with occasional limitations
                        </option>
                        <option value="Fair with frequent limitations">
                          Fair with frequent limitations
                        </option>
                        <option value="Poor with significant limitations">
                          Poor with significant limitations
                        </option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                        <svg
                          class="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.41-1.42L10 9.59l3.29-3.3a1 1 0 0 1 1.41 1.42l-4 4A1 1 0 0 1 10 12z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="securityCode"
                    >
                      Your speaking Level of English
                    </label>
                    <div class="relative">
                      <select
                        tabindex="0"
                        class="appearance-none w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                      >
                        <option value="" disabled selected>
                          Select your english level
                        </option>
                        <option value="high">High level of English</option>
                        <option value="medium">Medium level of English</option>
                        <option value="low">Low level of English</option>
                        <option value="intermediate">
                          Intermediate level of English
                        </option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                        <svg
                          class="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.41-1.42L10 9.59l3.29-3.3a1 1 0 0 1 1.41 1.42l-4 4A1 1 0 0 1 10 12z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="hearAboutOpportunity"
                    >
                      How did you hear about this opportunity?
                    </label>
                    <div class="relative">
                      <select
                        tabindex="0"
                        class="appearance-none w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="hearAboutOpportunity"
                      >
                        <option value="" disabled selected>
                          Select an option
                        </option>
                        <option value="socialMedia">Social Media</option>
                        <option value="friend">From a Friend</option>
                        <option value="website">From the Website</option>
                        <option value="other">Other</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                        <svg
                          class="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.41-1.42L10 9.59l3.29-3.3a1 1 0 0 1 1.41 1.42l-4 4A1 1 0 0 1 10 12z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="availabilityHours"
                    >
                      Please specify your availability hours per day
                    </label>
                    <div class="relative">
                      <select
                        tabindex="0"
                        class="appearance-none w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="availabilityHours"
                      >
                        <option value="" disabled selected>
                          Select hours per day
                        </option>
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6 hours</option>
                        <option value="7">7 hours</option>
                        <option value="8">8 hours</option>
                        <option value="9">9 hours</option>
                        <option value="10">10 hours</option>
                        <option value="11">11 hours</option>
                        <option value="12">12 hours</option>
                        <option value="more">More than 12 hours</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                        <svg
                          class="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.41-1.42L10 9.59l3.29-3.3a1 1 0 0 1 1.41 1.42l-4 4A1 1 0 0 1 10 12z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      for="motivation"
                    >
                      What motivates you to join this volunteer event?
                    </label>
                    <select
                      id="motivation"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                    >
                      <option value="" disabled selected>
                        Select your motivation
                      </option>
                      <option value="experience">
                        Desire for new experience
                      </option>
                      <option value="contribution">
                        Desire to contribute to the community
                      </option>
                      <option value="learning">
                        Opportunity for learning and growth
                      </option>
                      <option value="passion">Passion for the cause</option>
                      <option value="connection">
                        Desire to connect with like-minded individuals
                      </option>
                    </select>
                  </div>
                </div>

                <div class="flex items-center justify-between w-full gap-4 mt-8">
                  <div class="flex-grow"></div>
                  <div class="flex-shrink-0">
                    <button
                      onClick={() => handleLoginRedirect("/mlva")}
                      type="button"
                      class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Volunteerformcompo1;
