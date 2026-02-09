import Jose from "../assets/img/jose.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
const About = () => {
  const [bgImageUrl, setBgImageUrl] = useState("../assets/img/1000110790.png");
  return (
    <div className=" bg-[#e9d9c1] relative w-full bg-cover bg-center flex overflow-hidden rounded-b-4xl">
      {/* <img
        src={Jose}
        alt=""
        className="w-200 h-auto absolute -bottom-100 right-0"
      /> */}
      <div className="relative z-50 py-20 px-50 ">
        <div className="flex gap-15">
          <div className="flex flex-col gap-5 text-gray-800  w-100">
            <p className="text-5xl text-gray-900 uppercase font-lora font-semibold">
              Introduction
            </p>
            <p className=" text-ellipsis">
              The Rizal Course, mandated under Republic Act 1425 and
              institutionalized as a required component of the General Education
              Curriculum (GEC) in the tertiary, remains central to shaping
              Filipino nationalism, Filipino identity, civic consciousness,
              nation-building, social justice, and moral integrity. However,
              Gurong Nagbabalik sa Bayan (GNB) deems it necessary to look into
              the teaching of the Rizal Course. It suggests vital program which
              are needed to be addressed to make the Rizal Course relevant to
              nation building and socio-economic development. It calls for
              renewed approaches to how Rizal’s life, works, and ideals are
              taught in higher education based on the following observations:
            </p>
            {/* <p>
              evolving educational landscape which is marked by rapid advances
              in artificial intelligence (AI), digital learning, outcomes-based
              education, and 21st Century Learning Theories
              (interactive/experiential/ learning, and problem/project-based
              learning).
            </p> */}

            <div className="">
              <button className="text-xs flex gap-2 items-center py-2 px-3 float-right bg-[#650100] text-gray-50 cursor-pointer hover:bg-[#7b1412]">
                Learn More{" "}
                <Icon icon="formkit:arrowright" width="16" height="9" />
              </button>
            </div>
          </div>
          <div
            className="bg-[#650100] p-5 w-100 h-120 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${Jose})` }}
          ></div>
        </div>
      </div>
      {/* <div className="bg-[#0d0c11]/30 absolute h-full w-full left-0 top-0 "></div> */}
    </div>
  );
};

export default About;
