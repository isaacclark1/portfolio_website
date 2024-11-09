import { NavLink } from "react-router-dom";

type NavLinksProps = {
  closeNavigationMenu?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ closeNavigationMenu }) => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "hover:text-green-600 border-b-2 border-green-600" : "hover:text-green-600"
          }
          onClick={closeNavigationMenu}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "hover:text-green-600 border-b-2 border-green-600" : "hover:text-green-600"
          }
          onClick={closeNavigationMenu}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "hover:text-green-600 border-b-2 border-green-600" : "hover:text-green-600"
          }
          onClick={closeNavigationMenu}
        >
          Projects
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
