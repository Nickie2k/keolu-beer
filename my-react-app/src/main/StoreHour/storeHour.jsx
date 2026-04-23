import React from "react";
import "./storeHour.css";

const MyStore = () => {
  // array hours of day and time, with id to each element in the array
  const hours = [
    { id: 1, day: "Monday", time: "10:00 AM - 10:00 PM" },
    { id: 2, day: "Tuesday", time: "10:00 AM - 10:00 PM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "10:00 AM - 10:00 PM" },
    { id: 5, day: "Friday", time: "10:00 AM - 10:00 PM" },
    { id: 6, day: "Saturday", time: "10:00 AM - 10:00 PM" },
    { id: 7, day: "Sunday", time: "10:00 AM - 10:00 PM" },
  ];

  // Location coordinates for Keolu Beers
  const latitude = 21.3777838;
  const longitude = -157.7281151;

  return (
    <div className="store-hour-container">
      <div className="store-hour-content">
        {/* Left side - Opening Hours */}
        <div className="store-hour-info">
          <h2 className="store-hour-title">Opening Hours</h2>
          <div className="store-hours-list">
            {/* map method - loops through hours array */}
            {/* The rendering order goes from hours[0] to hours[6], id does not determine the order */}
            {hours.map((item) => (
              <div key={item.id} className="hour-item">
                <span className="day">{item.day}</span>
                <span className="time">{item.time}</span>
              </div>
            ))}
          </div>
          <p className="store-note">Open every day to serve you!</p>
        </div>

        {/* Right side - Map */}
        <div className="store-map">
          <iframe
            title="Keolu Beers Location"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.5!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c001492da1bdacb%3A0x5715a3c08a0e313d!2sKeolu%20Beers!5e0!3m2!1sen!2sus!4v1234567890`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyStore;
