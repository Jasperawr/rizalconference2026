import Luneta from "../assets/img/luneta.png";
import { Icon } from "@iconify/react";
import Carousel from "../components/Carousel";

const Location = () => {
  return (
    <div id="location" className=" bg-[#fefbf8] relative w-full flex ">
      <div className="relative w-full ">
        <div className="flex lg:flex-row flex-col-reverse w-full">
          <div className="bg-[#650100] aspect-square overflow-hidden w-full ">
            <Carousel />
          </div>
          <div className="flex flex-col text-gray-800 w-full justify-center items-center py-10">
            <div className="">
              <p className="text-lg uppercase font-lora tracking-widest text-center">
                Seminar-Workshop
              </p>
              <p className="text-4xl uppercase font-lora font-semibold text-center">
                Location
              </p>
              <div className="text-[16px] lg:text-base text-center pt-4 text-gray-900 font-lora">
                <p>Provincial Farmers Livelihood Development Center</p>
              </div>
            </div>
            <div className="lg:w-120 pl-5 lg:pl-0 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
