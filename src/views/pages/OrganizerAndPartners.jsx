import React from "react";
import NavbarSide from "../../components/mini/NavbarSide";
import NavbarTop from "../../components/mini/NavbarTop";
import OrganizersSkeleton from "../../components/skeletons/OrganizersSkeleton";
import OrganizerCard from "../../components/OrganizerCard";
import PartnersCard from "../../components/PartnersCard";
import Footer from "../Footer";

import EmmanuelCalairo from "../../assets/img/speakers/Emmanuel F. Calairo-Photoroom.png";
import JowemaePasngadan from "../../assets/img/speakers/Jowemae-Photoroom.png";
import RayNaguit from "../../assets/img/speakers/Ray S. Naguit-Photoroom.png";
import RebeccaAstilla from "../../assets/img/speakers/Rebecca Astilla-Photoroom.png";
import RegaladoJose from "../../assets/img/speakers/Regaldo Trota Jose Jr.-Photoroom.png";
import RegeneEugenio from "../../assets/img/speakers/Regene Eugenio-Photoroom.png";

import KnightsOfRizal from "../../assets/img/partners/knightOfRizal.png";

const organizers = [
  {
    img: RegeneEugenio,
    name: "Regene Eugenio",
    affiliation: "Punong Lalawigan ng Ilocos Sur",
  },
  {
    img: JowemaePasngadan,
    name: "Jowemai Pasngadan",
    affiliation: "Not specified",
  },
  {
    img: RayNaguit,
    name: "Ray S. Naguit, Ph.D.",
    affiliation: "Pangulo, GNB; Bulacan State University",
  },
  {
    img: RegaladoJose,
    name: "Regaldo Trota Jose Jr., Ph.D.",
    affiliation: "Chairperson, NHCP",
  },
  {
    img: EmmanuelCalairo,
    name: "Emmanuel F. Calairo, Ph.D.",
    affiliation: [
      "Dating Tagapangulo, NHCP",
      " Supreme Commander, GKCR",
      " De La Salle University, Manila",
    ],
  },
  {
    img: RebeccaAstilla,
    name: "Rebecca Astilla, MA",
    affiliation: "Bulacan State University",
  },
];

const partners = [
  {
    img: KnightsOfRizal,
    name: "Knights Of Rizal",
    sub: "Order of the Knights of Rizal",
  },
];

const OrganizerAndPartners = () => {
  return (
    <div className="pt-30  font-poppins">
      <NavbarSide />
      <NavbarTop />
      <div>
        <div className="relative z-10 flex flex-col items-center">
          {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
          <p className="text-lg uppercase font-lora tracking-widest">
            Seminar-Workshop
          </p>
          <p className="text-4xl lg:text-5xl uppercase font-lora font-semibold">
            Partners
          </p>
          {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
        </div>
        {/* <div className="w-full mt-15 lg:px-50">
        <OrganizersSkeleton />
      </div> */}
        <div className="w-full mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:px-20 pb-20 items-center">
          {/* <SpeakersSkeleton /> */}
          {partners.map((partner, index) => (
            <PartnersCard
              key={index}
              img={partner.img}
              name={partner.name}
              sub={partner.sub}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="relative z-10 flex flex-col items-center">
          {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
          {/* <p className="text-lg uppercase font-lora tracking-widest">
            Seminar-Workshop
          </p> */}
          <p className="text-4xl lg:text-5xl uppercase font-lora font-semibold">
            Organizer
          </p>
          {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
        </div>
        {/* <div className="w-full mt-15 lg:px-50">
        <OrganizersSkeleton />
      </div> */}
        <div className="w-full mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:px-20 pb-20">
          {/* <SpeakersSkeleton /> */}
          {organizers.map((organizer, index) => (
            <OrganizerCard
              key={index}
              img={organizer.img}
              name={organizer.name}
              affiliation={organizer.affiliation}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrganizerAndPartners;
