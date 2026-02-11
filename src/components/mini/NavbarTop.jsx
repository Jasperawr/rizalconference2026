import { useState } from "react";
import { NavLink } from "react-router-dom";
import GNB from "../../assets/img/GNB.png";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed lg:absolute top-0 left-0 w-full z-50 py-4 px-6  lg:px-24  flex justify-between items-center">
      <img src={GNB} alt="Logo" className="w-16 h-auto" />

      <ul className="hidden lg:flex gap-6 text-sm text-gray-900">
        <NavItems />
      </ul>

      <button
        className="lg:hidden text-2xl text-gray-100 bg-[#570100] rounded-full py-2 px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm text-gray-900">
            <NavItems closeMenu={() => setIsOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItems = ({ closeMenu }) => (
  <>
    <li>
      <NavLink
        to="/"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        About
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/program"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        Program
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/speaker"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        Speaker
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/tour"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        Tour
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/announcement"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        Announcement
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/organizerandpartners"
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
        }
      >
        Organizer & Partners
      </NavLink>
    </li>
  </>
);

export default NavbarTop;
