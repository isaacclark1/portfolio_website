import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../App";
import NavLinks from "./NavLinks";

const Header: React.FC = () => {
  // Is the 'Hire me' link hovered?
  const [isHireMeHovered, setIsHireMeHovered] = useState(false);

  // Theme of the application, either light or dark. setTheme is the state setter. See 'App' component.
  const { theme, setTheme } = useContext(ThemeContext);

  // Is the theme icon hovered?
  const [isThemeIconHovered, setIsThemeIconHovered] = useState(false);

  // Is the open menu button hovered?
  const [isOpenMenuButtonHovered, setIsOpenMenuButtonHovered] = useState(false);

  // Is the close menu button hovered?
  const [isCloseNavButtonHovered, setIsCloseNavButtonHovered] = useState(false);

  // Navigation element on small screens.
  const smallScreenNavElement = useRef<HTMLElement>(null);

  // Change the theme of the application.
  const toggleTheme = () => {
    setTheme!(theme === "light" ? "dark" : "light");
  };

  // Handle whether the 'Hire me' link is hovered by the mouse.
  const handleHireMeMouseOver = () => {
    setIsHireMeHovered(true);
  };

  // Handle whether the 'Hire me' link is no longer hovered by the mouse.
  const handleHireMeMouseOut = () => {
    setIsHireMeHovered(false);
  };

  // Handle whether the theme icon is hovered by the mouse.
  const handleThemeIconMouseOver = () => {
    setIsThemeIconHovered(true);
  };

  // Handle whether the theme icon is no longer hovered by the mouse
  const handleThemeIconMouseOut = () => {
    setIsThemeIconHovered(false);
  };

  // Handle whether the open menu button is hovered by the mouse.
  const handleOpenMenuButtonMouseOver = () => {
    setIsOpenMenuButtonHovered(true);
  };

  // Handle whether the open menu button is no longer hovered by the mouse.
  const handleOpenMenuButtonMouseOut = () => {
    setIsOpenMenuButtonHovered(false);
  };

  // Handle whether the close menu button is hovered by the mouse.
  const handleCloseMenuButtonMouseOver = () => {
    setIsCloseNavButtonHovered(true);
  };

  // Handle whether the close menu button is no longer hovered by the mouse.
  const handleCloseMenuButtonMouseOut = () => {
    setIsCloseNavButtonHovered(false);
  };

  // Open the navigation menu (small screens).
  const handleOpenMenuButtonClick = () => {
    smallScreenNavElement.current!.classList.remove("hidden");
    smallScreenNavElement.current!.classList.add("absolute");
  };

  // Close the navigation menu (small screens).
  const closeNavigationMenu = () => {
    smallScreenNavElement.current!.classList.remove("absolute");
    smallScreenNavElement.current!.classList.add("hidden");
  };

  return (
    <header className="flex flex-row bg-gray-100 dark:bg-gray-900 justify-between ">
      <nav className="sm:block hidden">
        <ul className="flex flex-row gap-10">
          <NavLinks />
        </ul>
      </nav>
      <button
        type="button"
        className="block sm:hidden"
        onMouseOver={handleOpenMenuButtonMouseOver}
        onMouseOut={handleOpenMenuButtonMouseOut}
        onClick={handleOpenMenuButtonClick}
        aria-label="Open navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill={(isOpenMenuButtonHovered && "#16a34a") || (theme === "light" ? "#000" : "#fff")}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      <nav
        className="hidden dark:bg-gray-900 bg-gray-200 z-50 inset-0 sm:m-5 p-10 animate-fadeInCenter"
        ref={smallScreenNavElement}
      >
        <button
          type="button"
          onMouseOver={handleCloseMenuButtonMouseOver}
          onMouseOut={handleCloseMenuButtonMouseOut}
          onClick={closeNavigationMenu}
          aria-label="Close navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill={(isCloseNavButtonHovered && "#16a34a") || (theme === "light" ? "#000" : "#fff")}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>

        <ul className="flex flex-col gap-10 mt-10 text-3xl">
          <NavLinks closeNavigationMenu={closeNavigationMenu} />
        </ul>
      </nav>

      <div className="flex flex-row gap-10">
        <button
          type="button"
          onClick={toggleTheme}
          onMouseOver={handleThemeIconMouseOver}
          onMouseOut={handleThemeIconMouseOut}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill={(isThemeIconHovered && "#16a34a") || "#fff"}
            >
              <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill={(isThemeIconHovered && "#16a34a") || "#000"}
            >
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
            </svg>
          )}
        </button>

        <a
          href="mailto:isaac2001clark@gmail.com?subject=Hi Isaac, I want to hire you!"
          className="hover:text-green-600"
          onMouseOver={handleHireMeMouseOver}
          onMouseOut={handleHireMeMouseOut}
        >
          Hire Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={(isHireMeHovered && "#16a34a") || (theme === "light" ? "#000" : "#fff")}
            className="inline ml-2"
          >
            <path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
