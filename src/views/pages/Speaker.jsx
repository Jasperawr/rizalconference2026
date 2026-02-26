import React from "react";
import NavbarSide from "../../components/mini/NavbarSide";
import NavbarTop from "../../components/mini/NavbarTop";
import Footer from "../Footer";
import SpeakersSkeleton from "../../components/skeletons/SpealetsSkeleton";
import SpeakerCard from "../../components/SpeakerCard";

import BobbyLopez from "../../assets/img/speakers/BOBBY DG. -Photoroom.png";
import NancyGabriel from "../../assets/img/speakers/Dr. Nancy Kimuell Gabriel-Photoroom.png";
import EmmanuelCalairo from "../../assets/img/speakers/Emmanuel F. Calairo-Photoroom.png";
import JaysonVictoriano from "../../assets/img/speakers/Jayson Victoriano.png";
import JemmaGonzales from "../../assets/img/speakers/Jemma Gonzales-Photoroom.png";
import JowemaePasngadan from "../../assets/img/speakers/Jowemae-Photoroom.png";
import MarotFlores from "../../assets/img/speakers/Marot Nelmida Flores-Photoroom.png";
import MaryJaneTatel from "../../assets/img/speakers/Mary Jane Rodriguez-Tatel-Photoroom.png";
import NiloOcampo from "../../assets/img/speakers/Nilo Ocampo-Photoroom.png";
import RayNaguit from "../../assets/img/speakers/Ray S. Naguit-Photoroom.png";
import RebeccaAstilla from "../../assets/img/speakers/Rebecca Astilla-Photoroom.png";
import RegaladoJose from "../../assets/img/speakers/Regaldo Trota Jose Jr.-Photoroom.png";
import RegeneEugenio from "../../assets/img/speakers/Regene Eugenio-Photoroom.png";
import ShaneVelasco from "../../assets/img/speakers/Shane Velasco-Photoroom.png";
import VicVillan from "../../assets/img/speakers/Vic Villan-Photoroom.png";

const speakers = [
  // {
  //   img: RegeneEugenio,
  //   name: "Regene Eugenio",
  //   affiliation: "Punong Lalawigan ng Ilocos Sur",
  // },
  // {
  //   img: JowemaePasngadan,
  //   name: "Jowemai Pasngadan",
  //   affiliation: "Not specified",
  // },
  // {
  //   img: RayNaguit,
  //   name: "Ray S. Naguit, Ph.D.",
  //   affiliation: "Pangulo, GNB; Bulacan State University",
  // },
  // {
  //   img: RegaladoJose,
  //   name: "Regaldo Trota Jose Jr., Ph.D.",
  //   affiliation: "Chairperson, NHCP",
  // },
  {
    img: MaryJaneTatel,
    name: "Maryjane G. Tatel, Ph.D.",
    affiliation: "UP Diliman",
    topic: "Rizal sa Dunong Bayan",
  },
  {
    img: MarotFlores,
    name: "Marot Nelmida Flores, Ph.D.",
    affiliation: "UP Diliman",
    topic: "Rizal: Kabansaan, Kalayaan, Kaunlaran ",
  },
  {
    img: ShaneVelasco,
    name: "Shane Velasco",
    affiliation: "Bulacan State University",
    topic: "Rizal at Diwa ng Los Agricultures ",
  },
  {
    img: NancyGabriel,
    name: "Nancy Kimuel Gabriel",
    affiliation: "UP Diliman",
    topic: "Rizal at Usaping Pangkasarian ",
  },
  // {
  //   img: EmmanuelCalairo,
  //   name: "Emmanuel F. Calairo, Ph.D.",
  //   affiliation: [
  //     "Dating Tagapangulo, NHCP",
  //     " Supreme Commander, GKCR",
  //     " De La Salle University, Manila",
  //   ],
  // },
  {
    img: NiloOcampo,
    name: "Nilo Ocampo, Ph.D.",
    affiliation: "UP Diliman",
    topic: "Rizal at Usaping Milenaryo at Pagbubuo ng Komunidad",
  },
  {
    img: BobbyLopez,
    name: "Bobby Lopez, Ph.D.",
    affiliation: "Bulacan State University",
    topic: "Rizal at mga Kabataan bilang Tagapagmana ng Bayan",
  },
  {
    img: VicVillan,
    name: "Vic Villan, Ph.D.",
    affiliation: "UP Diliman",
    topic:
      "Rizal at Pagsipat sa Diskurso ng Pamana at Kasaysayang Pilipino             ",
  },
  {
    img: JemmaGonzales,
    name: "Jemma Gonzales, MA",
    affiliation: "National University, Manila",
    topic: "Kursong Rizal sa Contextualized Teaching and Learning",
  },
  {
    img: JaysonVictoriano,
    name: "Dr. Jayson Victoriano",
    affiliation: "Bulacan State University",
    topic: "Rizal sa Panahon ng AI ",
  },
  // {
  //   img: RebeccaAstilla,
  //   name: "Rebecca Astilla, MA",
  //   affiliation: "Bulacan State University",
  // },
];

const Speaker = () => {
  return (
    <div className="pt-30  font-poppins">
      <NavbarSide />
      <NavbarTop />
      <div className="relative z-10 flex flex-col items-center">
        {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
        <p className="text-lg uppercase font-lora tracking-widest">
          Seminar-Workshop
        </p>
        <p className="text-5xl uppercase font-lora font-semibold">Speaker</p>
        {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
      </div>
      <div className="w-full mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:px-20 pb-20">
        {/* <SpeakersSkeleton /> */}
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            img={speaker.img}
            name={speaker.name}
            affiliation={speaker.affiliation}
            topic={speaker.topic}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Speaker;
