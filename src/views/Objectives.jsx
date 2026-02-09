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
  const [bgImageUrl, setBgImageUrl] = useState("../assets/img/1000110790.png");
  return (
    // bg-[#e9d9c1]
    <div
      className=" relative w-full bg-cover bg-center flex flex-col items-center py-20 px-50"
      // style={{ backgroundImage: `url(${Luneta})` }}
    >
      {/* <img
        src={Luneta}
        alt=""
        className="w-200 h-auto absolute bottom-0 right-0"
      /> */}
      <div className="relative z-10 flex flex-col items-center">
        {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
        <p className="text-lg uppercase font-lora tracking-widest">
          Seminar-Workshop
        </p>
        <p className="text-5xl uppercase font-lora font-semibold">objectives</p>
        {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
      </div>
      <div className="relative z-10 flex flex-wrap gap-5 pt-10 pl-15 ">
        {obj.map((item) => (
          <div className="p-5 w-60 h-60 border rounded-xl flex flex-col items-center gap-10 pt-9">
            <div className="flex">
              <Icon
                icon="ri:number-0"
                className="text-5xl text-[#650100] group-hover:text-white"
              />
              <Icon
                icon={item.icon}
                className="text-5xl text-[#650100] group-hover:text-white"
              />
            </div>
            <p className="text-xs text-center" key={item.id}>
              {/* <span className="text-xl font-bold">{item.id}</span>{" "} */}
              {item.objective}
            </p>
          </div>
        ))}
        <div
          className="bg-[#650100] p-5 w-60 h-60 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${Luneta})` }}
        >
          <img src={Luneta} alt="" className="h-auto w-200 hidden" />
        </div>
      </div>
      {/* <div className="bg-[#e9d9c1]/90 absolute h-full w-full left-0 top-0 "></div> */}
    </div>
  );
};

export default Objectives;
