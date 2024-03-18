import React, { useState } from "react";
import axios from 'axios';

function Createeventformcompo1() {
  const [Event_Name, setEvent_Name] = useState('');
  const [Qrganizer_contact_number, setQrganizer_contact_number] = useState('');
  const [Image, setImage] = useState(null);
  const [Hosted_By, setHosted_By] = useState('');
  const [Event_Type, setEvent_Type] = useState('');
  const [Volunteers_Needed, setVolunteers_Needed] = useState('');
  const [Start_Time, setStart_Time] = useState('');
  const [End_Time, setEnd_Time] = useState('');
  const [Event_Location, setEvent_Location] = useState('');
  const [Email_Address, setEmail_Address] = useState('');
  const [Sponsers_Name, setSponsers_Name] = useState('');
  const [Event_Date, setEvent_Date] = useState('');
  const [Ticket_Type, setTicket_Type] = useState('');
  const [Ticket_URL, setTicket_URL] = useState('');
  const [Event_Description, setEvent_Description] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (Image) {
        formData.append('Image', Image); // Append image file if selected
      }
      formData.append('Event_Name', Event_Name);
      formData.append('Qrganizer_contact_number', Qrganizer_contact_number);
      formData.append('Hosted_By', Hosted_By);
      formData.append('Event_Type', Event_Type);
      formData.append('Volunteers_Needed', Volunteers_Needed);
      formData.append('Start_Time', Start_Time);
      formData.append('End_Time', End_Time);
      formData.append('Event_Location', Event_Location);
      formData.append('Email_Address', Email_Address);
      formData.append('Sponsers_Name', Sponsers_Name);
      formData.append('Event_Date', Event_Date);
      formData.append('Ticket_Type', Ticket_Type);
      formData.append('Ticket_URL', Ticket_URL);
      formData.append('Event_Description', Event_Description);

      const response = await axios.post(`http://localhost:8080/products/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Event created successfully:', response.data);
      // Reset form fields after successful submission
      setEvent_Name('');
      setQrganizer_contact_number('');
      setHosted_By('');
      setEvent_Type('');
      setVolunteers_Needed('');
      setStart_Time('');
      setEnd_Time('');
      setEvent_Location('');
      setEmail_Address('');
      setSponsers_Name('');
      setEvent_Date('');
      setTicket_Type('');
      setTicket_URL('');
      setEvent_Description('');
      setImage(null);

      setError('');
    } catch (error) {
      setError('Failed to create event. Please try again.');
      console.error('Error creating event:', error.response.data);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected image file
  };

  return (
    <>
      <div className="mt-10 px-7">
        <p className="text-xl font-semibold leading-tight text-gray-800">
          Event Details
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 ">
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Event Name
              </p>
              <input
                value={Event_Name}
                onChange={(e) => setEvent_Name(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Organizer Contact Number
              </p>
              <input
                value={Qrganizer_contact_number}
                onChange={(e) => setQrganizer_contact_number(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Hosted By
              </p>
              <input
                value={Hosted_By}
                onChange={(e) => setHosted_By(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Event Type
              </p>
              <input
                value={Event_Type}
                onChange={(e) => setEvent_Type(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Volunteers Needed
              </p>
              <input
                value={Volunteers_Needed}
                onChange={(e) =>setVolunteers_Needed(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Start Time
              </p>
              <input
                value={Start_Time}
                onChange={(e) => setStart_Time(e.target.value)}
                type="time"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                End Time
              </p>
              <input
                value={End_Time}
                onChange={(e) => setEnd_Time(e.target.value)}
                type="time"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Event Location
              </p>
              <input
                value={Event_Location}
                onChange={(e) => setEvent_Location(e.target.value)}
                type="text"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                placeholder="Enter location..."
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Email Address
              </p>
              <input
                value={Email_Address}
                onChange={(e) => setEmail_Address(e.target.value)}
                type="email"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Sponsors Name
              </p>
              <input
                value={Sponsers_Name}
                onChange={(e) => setSponsers_Name(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Event Date
              </p>
              <input
                value={Event_Date}
                onChange={(e) => setEvent_Date(e.target.value)}
                type="date"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Ticket Type
              </p>
              <input
                value={Ticket_Type}
                onChange={(e) => setTicket_Type(e.target.value)}
                type="text"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Ticket URL
              </p>
              <input
                value={Ticket_URL}
                onChange={(e) => setTicket_URL(e.target.value)}
                type="text"
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Description
              </p>
              <textarea
                value={Event_Description}
                onChange={(e) => setEvent_Description(e.target.value)}
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Event Image
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
          </div>
          {error && <p>{error}</p>}
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Event
          </button>
        </form>
      </div>
    </>
  );
}

export default Createeventformcompo1;
