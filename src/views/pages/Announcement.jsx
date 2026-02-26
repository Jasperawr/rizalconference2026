import React from "react";
import NavbarSide from "../../components/mini/NavbarSide";
import NavbarTop from "../../components/mini/NavbarTop";
import Footer from "../Footer";
import AnnouncementCard from "../../components/AnouncemnetCard";

import Post1 from "../../assets/img/posts/1/1.jpg";
import Post21 from "../../assets/img/posts/2/1.jpg";
import Post22 from "../../assets/img/posts/2/2.jpg";
import Post23 from "../../assets/img/posts/2/3.jpg";

const announcements = [
  {
    title:
      "Strengthening Partnerships for the 2026 Pambansang Seminar-Workshop",
    date: "February 23, 2026 at 9:24 AM",
    images: [Post21, Post22, Post23],
    content: `Ang Gurong Nagbabalik sa Bayan (GNB) na kinatawan nina Dr. Ray Naguit at Dr Jayson Victoriano ng Bulacan State University ay nag courtesy call at nakipagpulong kay Dr Emmanuell Calairo, Supreme Commander ng Knights of Rizal (KOR) para sa malawakang partnership ng GNB at KOR sa pagsasagawa Pambansang Seminar-Workshop sa Makabagong Pagtuturo ng Kursong Rizal na gaganapin sa May 28-30, 2026, Lungsod ng Vigan. Ito rin ay sa pakikiisa ng Pamahalaang Lalawigan ng Ilocos Sur, Pamahalaang Panglungsod ng Lungsod ng Vigan. Nilalayon din ang pakikipagkatuwang ng PASUC, NHCP, COCOPEA, DepEd at ang PRC-CPD equivalent units ay patuloy ng ginaganap para sa mga dadalao. Napagtibay na rin ang partnership ng ReimaginEduc2050 Hub, Y-One I.T. Solutions, Philippine National Associations of Librarians, `,
  },
  {
    title:
      "PAANYAYA SA LAHAT NG MGA GURO, MAG-AARAL,  PROPESYUNAL, AT TAGAPAGTAGUYOD NG MAPAGPALAYANG EDUKASYON!",
    date: "February 11, 2026 at 6:39 AM",
    images: [Post1],
    content: `Handa ka na bang palalimin ang iyong pag-unawa kay Dr. Jose Rizal at iangat ang pagtuturo ng Kursong Rizal sa mas makabuluhan at makabagong antas?
Inaanyayahan namin kayo sa DALUMATAN NG GURONG NAGBABALIK SA BAYAN 2026, isang pambansang pagsasanay sa pagtuturo ng Kursong Rizal. `,
  },
];

const Announcement = () => {
  return (
    <div className="pt-30 font-poppins">
      <NavbarSide />
      <NavbarTop />
      <div className="relative z-10 flex flex-col items-center">
        {/* <div className="border rounded border-gray-900 w-10 mb-3"></div> */}
        <p className="text-lg uppercase font-lora tracking-widest">
          Seminar-Workshop
        </p>
        <p className="text-4xl lg:text-5xl uppercase font-lora font-semibold">
          Announcement
        </p>
        {/* <div className="border rounded border-gray-900 w-10 mt-3 float-end"></div> */}
      </div>
      <div className="w-full mt-15 flex flex-col items-center pb-20 gap-10">
        {/* <p className="w-full text-center text-gray-500">To be announced</p>
         */}
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Announcement;
