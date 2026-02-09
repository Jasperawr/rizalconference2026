import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Home", icon: "material-symbols:home-outline", path: "/" },
  { label: "About", icon: "ix:about", path: "/about" },
  {
    label: "Program",
    icon: "material-symbols:event-outline",
    path: "/program",
  },
  { label: "Speaker", icon: "ph:microphone-bold", path: "/speaker" },
  {
    label: "Tour",
    icon: "material-symbols:location-on-outline",
    path: "/tour",
  },
  {
    label: "Announcement",
    icon: "majesticons:megaphone-line",
    path: "/announcment",
  },
  {
    label: "Organizer & Partners",
    icon: "fluent:people-12-regular",
    path: "/organizerandpartners",
  },
];

const NavbarSide = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-20 right-0 z-50 transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-6 pointer-events-none"
        }
      `}
    >
      <ul className="py-6 text-[11px] text-gray-50 flex flex-col gap-1">
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center justify-center
                w-12 h-12 rounded-l-3xl transition-all
                ${
                  isActive ? "bg-[#260701]" : "bg-[#570100] hover:bg-[#8d453e]"
                }`
              }
            >
              <Icon
                icon={item.icon}
                className="text-lg text-gray-300 group-hover:text-white"
              />

              <span
                className="absolute right-full mr-3 px-3 py-1
                  rounded-md bg-black text-white text-[11px]
                  opacity-0 translate-x-2 pointer-events-none
                  transition-all duration-200
                  group-hover:opacity-100 group-hover:translate-x-0"
              >
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarSide;
