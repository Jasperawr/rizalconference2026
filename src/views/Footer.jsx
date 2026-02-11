import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-100 relative w-full bg-cover bg-center flex flex-col overflow-hidden">
      <div className="relative  py-5 pb-8 px-50 bg-[#f5f5f5] text-center text-gray-900 w-full"></div>
      <div className="relative  py-5 pb-8 px-50 bg-[#802727] text-center text-gray-100 w-full">
        <p className="text-sm font-semibold uppercase tracking-wide">
          Gurong Nagbabalik sa Bayan
        </p>
        <p className="text-[13px]">
          Dalumatan ng Gurong Nagbabalik sa Bayan 2026 <br /> Pambansang
          Seminar-Workshop sa Makabagong Pagtuturo ng <br />{" "}
          <span className="font-bold">Kursong Rizal</span>
        </p>
      </div>
      {/* <div className="bg-[#0d0c11]/30 absolute h-full w-full left-0 top-0 "></div> */}
    </div>
  );
};

export default Footer;
