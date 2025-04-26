import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-10 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subtitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {/* Heading Row */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payments</div>
        </div>

        {/* Booking Items */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col md:grid md:grid-cols-[3fr_2fr_1fr] gap-5 md:gap-0 border-b border-gray-300 py-5"
          >
            {/* Hotel Details */}
            <div className="flex gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel-image"
                className="w-32 h-24 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="font-play text-lg text-gray-800">
                  {booking.hotel.name}
                  <span className="font-inter text-sm text-gray-500 ml-1">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    src={assets.locationIcon}
                    alt="location-icon"
                    className="w-4 h-4"
                  />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    src={assets.guestsIcon}
                    alt="guests-icon"
                    className="w-4 h-4"
                  />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            {/* Date & Timing */}
            <div className="flex flex-col gap-1 text-sm">
              <p>Check-In:</p>
              <p className="pb-2">{new Date(booking.checkInDate).toDateString()}</p>

              <p>Check-Out: {booking.checkOut}</p>
              <p>{new Date(booking.checkInDate).toDateString()}</p>
            </div>

            {/* Payment Info */}
            <div className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                <p className={`h-3 w-3 rounded-full ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                    {booking.isPaid ? "paid" : "unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="px-4 py-1 mt-4 cursor-pointer text-xs border border-gray-400 rounded-full hover:bg-gray-100">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
