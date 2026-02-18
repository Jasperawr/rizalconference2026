import React from "react";
import NavbarSide from "../../components/mini/NavbarSide";
import NavbarTop from "../../components/mini/NavbarTop";
import OrganizersSkeleton from "../../components/skeletons/OrganizersSkeleton";
import Footer from "../Footer";

const OrganizerAndPartners = () => {
  return (
    <div className="pt-30  font-poppins">
      <NavbarSide />
      <NavbarTop />
      <div className="relative z-10 flex flex-col items-center">
        {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
        <p className="text-lg uppercase font-lora tracking-widest">
          Seminar-Workshop
        </p>
        <p className="text-4xl lg:text-5xl uppercase font-lora font-semibold">
          Organizer And Partners
        </p>
        {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
      </div>
      <div className="w-full mt-15 lg:px-50">
        <OrganizersSkeleton />
      </div>
      <Footer />
    </div>
  );
};

export default OrganizerAndPartners;
