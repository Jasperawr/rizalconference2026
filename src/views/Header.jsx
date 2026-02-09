import React from "react";
import Pepe from "../assets/img/pepe-full.png";
import Vigan from "../assets/img/vigan2.jpg";

const Header = () => {
  return (
    <section
      id="home"
      className="w-full pt-30 px-50 relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Vigan})` }}
    >
      {/* #9a4700 */}
      <div className="bg-white/75 absolute h-full w-full left-0 top-0 "></div>
      <div className="items-end flex flex-col w-full relative z-10">
        <div>
          <h1 className=" font-lora text-8xl text-left">Rizal</h1>
          <h1 className=" font-lora text-8xl">Conference</h1>
          <h1 className=" font-lora text-8xl font-semibold bg-gradient-to-r from-[#7b1602] via-[#b66719] to-[#7b1502] inline-block text-transparent bg-clip-text">
            2026
          </h1>
        </div>
        {/* <div className="py-3">
              <button className="cursor-pointer hover:border-b transition-all duration-200 ease-in-out">
                Join Us Now!
              </button>
            </div> */}
      </div>
      <div className="text-right py-15 flex flex-col relative gap-5 z-10">
        <div className="">
          <p className="uppercase font-bold text-[#8a3801] text-2xl">
            May 28–30, 2026
          </p>
          <p className="leading-none text-lg font-semibold">
            PAMBANSANG SEMINAR-WORKSHOP SA
          </p>
          <p className="text-lg font-semibold ">
            MAKABAGONG PAGTUTURO NG{" "}
            <span className="text-[#7b1502]">KURSONG RIZAL</span>
          </p>
          <p className="text-xs leading-none italic ">
            “Higit pa sa Noli at Fili: Pagpapalalim at Pagpapahusay ng Guro
          </p>
          <p className="text-xs italic">
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

      <img
        src={Pepe}
        alt=""
        className=" absolute left-0 bottom-0 w-150 h-auto z-10"
      />
    </section>
  );
};

export default Header;
