import React from "react";
import NavbarSide from "../../components/mini/NavbarSide";
import NavbarTop from "../../components/mini/NavbarTop";
import Venue from "../Venue";
import Footer from "../Footer";
import Location from "../Location";

const EventVenue = () => {
  return (
    <div className="pt-30 font-poppins">
      <NavbarSide />
      <NavbarTop />
      <div className="relative z-10 flex flex-col items-center">
        {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
        <p className="text-lg uppercase font-lora tracking-widest">
          Seminar-Workshop
        </p>
        <p className="text-4xl lg:text-5xl uppercase font-lora font-semibold">
          Venue
        </p>
        {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
      </div>
      <div className="w-full mt-15">
        <Location />
        <Venue />
        <Footer />
      </div>
    </div>
  );
};

export default EventVenue;
