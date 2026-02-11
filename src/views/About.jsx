import Jose from "../assets/img/jose.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const About = () => {
  // const [bgImageUrl, setBgImageUrl] = useState("../assets/img/1000110790.png");
  return (
    <div id="introduction" className=" bg-[#fefbf8] relative w-full flex ">
      <div className="relative w-full ">
        <div className="flex flex-col lg:flex-row  w-full">
          <div className="bg-[#650100] aspect-square overflow-hidden w-full ">
            <img src={Jose} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-gray-800 w-full justify-center items-center py-10">
            <div className="lg:w-140">
              <p className="text-4xl text-gray-900 uppercase font-lora font-semibold  pl-5 lg:pl-0">
                Introduction
              </p>
              <p className=" text-ellipsis py-5 pl-5 lg:pl-0">
                The Rizal Course, mandated by Republic Act 1425, remains vital
                in shaping Filipino nationalism, identity, and civic values.
                However, changes in education, technology, and society call for
                renewed approaches in teaching Rizal’s life, works, and ideals.
                Gurong Nagbabalik sa Bayan highlights gaps in current teaching
                practices and the need to align the course with 21st-century
                learning, research-based insights, and national development
                goals. In response, a CHED-endorsed three-day National
                Seminar-Workshop aims to strengthen Rizal Course instruction by
                enhancing content mastery, innovative pedagogy, and
                technological competence. The program seeks to ensure that
                Rizal’s vision continues to inspire learners in a rapidly
                evolving digital age.
              </p>

              <div className="">
                <NavLink
                  to="/about"
                  className="text-xs flex gap-2 items-center py-2 px-3 float-right bg-[#650100] text-gray-50 cursor-pointer hover:bg-[#7b1412] mb-5"
                >
                  Learn More{" "}
                  <Icon icon="formkit:arrowright" width="16" height="9" />
                </NavLink>
              </div>
            </div>
            <div className="lg:w-120 pl-5 lg:pl-0 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
