import { NavLink } from "react-router-dom";
import RizalLogo from "../../assets/img/rizalLogo-bgremoved.png";

const NavbarTop = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-3 px-50 flex flex-row-reverse justify-between items-center">
      <img src={RizalLogo} alt="Logo" className="w-22 h-auto" />

      <ul className="flex gap-6 text-xs text-gray-900">
        <li>
          <NavLink
            to="/"
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
            className={({ isActive }) =>
              isActive ? "font-semibold" : "opacity-70 hover:opacity-100"
            }
          >
            Organizer & Partners
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarTop;
