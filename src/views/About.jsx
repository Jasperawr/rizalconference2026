import Jose from "../assets/img/jose.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const About = () => {
  // const [bgImageUrl, setBgImageUrl] = useState("../assets/img/1000110790.png");
  return (
    <div id="introduction" className="  relative w-full flex ">
      <div className="relative w-full ">
        <div className="flex flex-col lg:flex-row  w-full">
          <div className="bg-[#650100] aspect-square overflow-hidden w-full ">
            <img src={Jose} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-gray-800 w-full justify-center pl-10  py-10">
            <div className="lg:w-160">
              <p className="text-4xl text-gray-900 uppercase font-lora font-semibold  pl-5 lg:pl-0">
                Introduction
              </p>
              <p className=" text-ellipsis py-5 pl-5 lg:pl-0">
                The Rizal Course, mandated under Republic Act 1425 and
                institutionalized as a required component of the General
                Education Curriculum (GEC) in the tertiary, remains central to
                shaping Filipino nationalism, Filipino identity, civic
                consciousness, nation-building, social justice, and moral
                integrity. However, Gurong Nagbabalik sa Bayan (GNB) deems it
                necessary to look into the teaching of the Rizal Course. It
                suggests vital program which are needed to be addressed to make
                the Rizal Course relevant to nation building and socio-economic
                development. It calls for renewed approaches to how Rizal’s
                life, works, and ideals are taught in higher education based on
                the following observations:
              </p>
              <p className=" text-ellipsis py-2 pl-5 lg:pl-0">
                a. evolving educational landscape which is marked by rapid
                advances in artificial intelligence (AI), digital learning,
                outcomes-based education, and 21st Century Learning Theories
                (interactive/experiential/ learning, and problem/project-based
                learning).
              </p>
              <p className=" text-ellipsis py-2 pl-5 lg:pl-0">
                b. continuing teaching/learning gaps that were identified as
                borne out by research, which need to be addressed to make the
                Rizal Course relevant to the times, engaging, and intellectually
                stimulating.
              </p>
              <p className=" text-ellipsis py-2 pl-5 lg:pl-0">
                c. a call for renewed approaches to how Rizal’s life, works,
                ideals/ideas, nationalism, and heroism are taught in higher
                education in accordance with RA No. 1425 (Rizal Law) and CHED
                CMO Nos. 20, S -2013 and CHED CMO No. 25, S-2015
              </p>

              <p className=" text-ellipsis py-4 pl-5 lg:pl-0">
                This three-day National Seminar-Workshop, which is endorsed by
                the Commission on Higher Education (CHED), the Philippine
                Association of State Universities and Colleges, Coordinating
                Council of Private Educational Associations, National Historical
                Commission of the Philippines, and the national leadership of
                Knights of Rizal is sought, seeks to strengthen the teaching of
                the Rizal Course by equipping educators with content mastery,
                alignment with nation-building goals, pedagogical innovation,
                and technological competence. It aims to bridge classical
                Rizalian scholarship with updated research and perspectives,
                AI-enhanced teaching, digital assessment tools, and
                transformative learning strategies that align with 21st-century
                competencies and the GE program outcomes. <br /> Through plenary
                sessions, expert dialogues, and hands-on workshops, the seminar
                will foster collaboration among educators, historians,
                curriculum and education specialists to ensure that Rizal’s
                vision of nationhood continues to inspire learners in an era of
                automation and information abundance.
              </p>

              {/* <div className="">
                <NavLink
                  to="/about"
                  className="text-xs flex gap-2 items-center py-2 px-3 float-right bg-[#650100] text-gray-50 cursor-pointer hover:bg-[#7b1412] mb-5"
                >
                  Learn More{" "}
                  <Icon icon="formkit:arrowright" width="16" height="9" />
                </NavLink>
              </div> */}
            </div>
            <div className="lg:w-120 pl-5 lg:pl-0 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
