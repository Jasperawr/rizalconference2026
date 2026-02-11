import Luneta from "../assets/img/luneta.png";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
const obj = [
  {
    id: 1,
    objective: `Deepen participants’
          mastery of Rizal’s life, works, writings, and ideas (historical,
          philosophical, political) in their historical and contemporary
          contexts;`,
    img: "",
    icon: "ri:number-1",
  },
  {
    id: 2,
    objective: `Align the teaching of
          the Rizal Course with OBE principles and CHED GE outcomes;`,
    img: "",
    icon: "ri:number-2",
  },
  {
    id: 3,
    objective: `Introduce AI-supported
          and technology-enabled pedagogies and assessment tools applicable to
          the Rizal Course;`,
    img: "",
    icon: "ri:number-3",
  },
  {
    id: 4,
    objective: `Develop instructional
          materials and modules integrating AI applications and critical digital
          literacy; and`,
    img: "",
    icon: "ri:number-4",
  },
  {
    id: 5,
    objective: `Foster collaboration
          and scholarly exchange among Rizal educators and General Education
          faculty across HEIs.`,
    img: "",
    icon: "ri:number-5",
  },
];

const Objectives = () => {
  return (
    <div id="objectives" className=" bg-[#fefbf8] relative w-full flex ">
      <div className="relative w-full ">
        <div className="flex flex-col-reverse lg:flex-row w-full">
          <div className="flex flex-col text-gray-800 w-full justify-center items-center py-10">
            <div className="">
              <p className="text-lg uppercase font-lora tracking-widest">
                Seminar-Workshop
              </p>
              <p className="text-4xl uppercase font-lora font-semibold">
                Objectives
              </p>
            </div>
            <div className="lg:w-120 pl-5 lg:pl-0 ">
              {obj.map((item) => (
                <div className=" w-full flex flex-col pt-9">
                  <p className="" key={item.id}>
                    <span className="text-xl font-bold pr-5">{item.id}</span>
                    {item.objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#650100] aspect-square overflow-hidden w-full ">
            <img src={Luneta} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
