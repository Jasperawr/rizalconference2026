import React from "react";
import GNB from "../assets/img/GNB.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 text-gray-900 px-6 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-around">
          {/* Organization */}
          <div className="space-y-3">
            <img src={GNB} alt="" className="w-36 h-auto" />
            <p className="font-semibold uppercase text-sm leading-none">
              Gurong Nagbabalik sa Bayan
            </p>
            <p className="text-xs leading-none">
              (Gurong Nagkamalayang Bayan, Inc)
            </p>
            <p className="text-xs leading-none">
              1134 Balubad, Bulakan, Bulacan
            </p>
            <p className="text-xs leading-none">
              Silid 109, Gusali ng CSSP, BulSU, Malolos, Bulacan
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold uppercase text-sm tracking-wide">
              Contact
            </h3>
            <p className="text-sm">0905 391 6803</p>
            <p className="text-sm">parasabayan88@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold uppercase text-sm tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#header" className="hover:underline">
                  Header
                </a>
              </li>
              <li>
                <a href="#introduction" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#objectives" className="hover:underline">
                  Objectives
                </a>
              </li>
              <li>
                <a href="#location" className="hover:underline">
                  Location
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:underline">
                  Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-3">
            <h3 className="font-semibold uppercase text-sm tracking-wide">
              Partners
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Sample 1</li>
              <li>Sample 11</li>
              <li>Sample 111</li>
              <li>Sample 1111</li>
              <li>Sample 11111</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#802727] text-gray-100 px-6 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Gurong Nagbabalik sa Bayan
          </p>
          <p className="text-xs lg:text-sm leading-relaxed">
            Dalumatan ng Gurong Nagbabalik sa Bayan 2026
            <br />
            Pambansang Seminar-Workshop sa Makabagong Pagtuturo ng
            <br />
            <span className="font-bold">Kursong Rizal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
