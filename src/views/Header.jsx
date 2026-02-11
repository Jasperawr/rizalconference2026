import React from "react";
import Pepe from "../assets/img/pepe-full.png";
import Vigan from "../assets/img/vigan2.jpg";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <section
      id="home"
      className="w-full pt-30 px-30 relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Vigan})` }}
    >
      {/* #9a4700 */}
      <div className="bg-white/85 absolute h-full w-full left-0 top-0 "></div>
      <div className=" flex flex-col w-full relative z-10">
        <div>
          <h1 className=" font-poppins text-lg text-left tracking-[15px] mb-2">
            GURONG NAGBABALIK SA BAYAN
          </h1>
          <h1 className=" font-lora text-4xl font-semibold text-left">
            PAMBANSANG SEMINAR-WORKSHOP
          </h1>
          <h1 className=" font-lora text-4xl font-semibold">
            SA MAKABAGONG PAGTUTURO NG
          </h1>
          <h1 className=" font-lora text-7xl font-bold text-[#7b1502]">
            KURSONG RIZAL
          </h1>
          {/* <h1 className=" font-lora text-7xl font-semibold bg-gradient-to-r from-[#7b1602] via-[#b66719] to-[#7b1502] inline-block text-transparent bg-clip-text">
            KURSONG RIZAL
          </h1> */}
        </div>
        {/* <div className="py-3">
              <button className="cursor-pointer hover:border-b transition-all duration-200 ease-in-out">
                Join Us Now!
              </button>
            </div> */}
      </div>
      <div className="text-left pt-5 flex flex-col relative gap-5 z-10">
        <div className="">
          <p className="text-lg font-medium leading-none italic font-lora ">
            “Higit pa sa Noli at Fili: Pagpapalalim at Pagpapahusay ng Guro
          </p>
          <p className="text-lg font-medium italic font-lora">
            Tungo sa Mapagpabago at Makabuluhang Edukasyon”
          </p>
        </div>

        {/* <div>
          <a
            href="https://forms.gle/zYgSMDgtnamXYC7S7"
            className="border-b-2 text-[#b6681a] transition-all duration-300 ease-in-out"
          >
            ARATS, SALI NA!
          </a>
        </div> */}
      </div>

      <div className="text-left pt-12 flex flex-col relative z-10">
        <div className="w">
          <p className="uppercase font-semibold text-lg">
            <span>AT</span> Provincial Capitol, Vigan City, Ilocos Sur
          </p>
        </div>
        <p className="uppercase font-medium text-5xl font-lb">
          May 28–30, 2026
        </p>

        <div className="pt-12">
          <a
            href="https://forms.gle/zYgSMDgtnamXYC7S7"
            className="text-gray-100 rounded-full py-2 px-5 bg-[#814001] hover:border-b transition-all duration-200 ease-in-out"
          >
            I-CLICK PARA MAGREGISTER
          </a>
        </div>
        {/* <div className="pt-8">
          <a
            href="https://forms.gle/zYgSMDgtnamXYC7S7"
            className=" border-[#8a3801] rounded-lg py-2 px-8 bg-[#8a3801] hover:bg-[#8a3801] text-gray-50 transition-all duration-300 ease-in-out"
          >
            SALI NA!
          </a>
        </div> */}
      </div>

      <img
        src={Pepe}
        alt=""
        className=" absolute right-0 bottom-0 w-150 h-auto z-10 -scale-x-100"
      />
    </section>
  );
};

export default Header;
