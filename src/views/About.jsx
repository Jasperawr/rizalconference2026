import Jose from "../assets/img/jose.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const About = () => {
  const [bgImageUrl, setBgImageUrl] = useState("../assets/img/1000110790.png");
  return (
    <div className=" bg-[#e9d9c1] relative w-full bg-cover bg-center flex overflow-hidden rounded-b-4xl">
      {/* <img
        src={Jose}
        alt=""
        className="w-200 h-auto absolute -bottom-100 right-0"
      /> */}
      <div className="relative z-50 py-20 px-30 ">
        <div className="flex flex-row-reverse gap-15">
          <div className="flex flex-col gap-5 text-gray-800 w-100 ">
            <p className="text-5xl text-gray-900 uppercase font-lora font-semibold">
              Introduction
            </p>
            <p className=" text-ellipsis">
              The Rizal Course, mandated by Republic Act 1425, remains vital in
              shaping Filipino nationalism, identity, and civic values. However,
              changes in education, technology, and society call for renewed
              approaches in teaching Rizal’s life, works, and ideals. Gurong
              Nagbabalik sa Bayan highlights gaps in current teaching practices
              and the need to align the course with 21st-century learning,
              research-based insights, and national development goals. In
              response, a CHED-endorsed three-day National Seminar-Workshop aims
              to strengthen Rizal Course instruction by enhancing content
              mastery, innovative pedagogy, and technological competence. The
              program seeks to ensure that Rizal’s vision continues to inspire
              learners in a rapidly evolving digital age.
            </p>
            {/* <p>
              evolving educational landscape which is marked by rapid advances
              in artificial intelligence (AI), digital learning, outcomes-based
              education, and 21st Century Learning Theories
              (interactive/experiential/ learning, and problem/project-based
              learning).
            </p> */}

            <div className="">
              <NavLink
                to="/about"
                className="text-xs flex gap-2 items-center py-2 px-3 float-right bg-[#650100] text-gray-50 cursor-pointer hover:bg-[#7b1412]"
              >
                Learn More{" "}
                <Icon icon="formkit:arrowright" width="16" height="9" />
              </NavLink>
            </div>
          </div>
          <div
            className="bg-[#650100] p-5 w-125 h-130 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${Jose})` }}
          ></div>
        </div>
      </div>
      {/* <div className="bg-[#0d0c11]/30 absolute h-full w-full left-0 top-0 "></div> */}
    </div>
  );
};

export default About;
