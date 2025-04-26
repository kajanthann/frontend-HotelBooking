import React, { useState } from "react";
import Title from "../components/Title";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StartRate from "../components/StartRate";

// Checkbox component (for amenities, room type, etc.)
const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

// Radio button component (for sort options)
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFill, setOpenFill] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRange = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
  const sortOption = ["Price Low to High", "Price High to Low", "Newest First"];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-20 md:pt-30 px-4 md:px-10 lg:px-24 xl:px-32">
      {/* Room Listings */}
      <div>
        <Title
          title="Hotel Rooms"
          align="left"
          subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              title="View Room Details"
            />

            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-play cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StartRate />
                <p className="ml-2">200+ Reviews</p>
              </div>

              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="Location" />
                <span>{room.hotel.address}</span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight} /Night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Sidebar */}
      <div className="lg:ml-10 w-full lg:w-72 rounded border border-gray-400">
        {/* Filter Header */}
        <div
          className={`flex items-center justify-between px-5 py-2.5 border-b border-gray-300 ${
            openFill ? "border-black" : ""
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTER</p>
          <div className="text-xs cursor-pointer">
            <span onClick={() => setOpenFill(!openFill)} className="lg:hidden">
              {openFill ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>

        {/* Filter Options */}
        <div
          className={`${
            openFill ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden grid md:grid-cols-3 md:gap-10 lg:gap-0 lg:grid-cols-1 transition-all duration-700`}
        >
          {/* Room Types */}
          <div className="px-5  pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>

          {/* Price Ranges */}
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRange.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>

          {/* Sort Options */}
          <div className="px-5 py-5">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOption.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
