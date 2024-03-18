import React from 'react';

class Createeventformcompo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketOption: 'free',
      ticketURL: ''
    };
    this.handleTicketOptionChange = this.handleTicketOptionChange.bind(this);
    this.handleTicketURLChange = this.handleTicketURLChange.bind(this);
  }

  handleTicketOptionChange(event) {
    this.setState({ ticketOption: event.target.value });
  }

  handleTicketURLChange(event) {
    this.setState({ ticketURL: event.target.value });
  }

  render() {
    const { ticketOption, ticketURL } = this.state;

    return (
      <div className="mt-10 px-7">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            Event Type
          </p>
          <select
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            value={ticketOption}
            onChange={this.handleTicketOptionChange}
          >
            <option value="free">Free Event</option>
            <option value="tickets-available">Tickets Available</option>
            <option value="tickets-not-available">Tickets Not Available</option>
          </select>
        </div>

        {ticketOption === 'tickets-available' && (
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Ticket URL
            </p>
            <input
              type="url"
              className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              value={ticketURL}
              onChange={this.handleTicketURLChange}
            />
          </div>
        )}

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            Hosted By
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
          />
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            Event Name
          </p>
          <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
        </div>
      </div>
    );
  }
}

export default Createeventformcompo2;
