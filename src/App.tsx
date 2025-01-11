import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";

// Theme of the application: either light or dark.
export const ThemeContext = createContext<{
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>> | null;
}>({ theme: null, setTheme: null });

function App() {
  // Theme of the application, which is either light or dark.
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // Set the initial page theme based on the user's system preference.
  useEffect(() => {
    // Check for saved theme preference.
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check the user's system theme preference.
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Set the theme based on the current state.
  useEffect(() => {
    // If theme no theme yet, return.
    if (!theme) return;

    // Add or remove the 'dark' class from the html element depending on the current theme state.
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Update theme in local storage.
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="w-full h-full flex flex-col">
        <Header />

        <Outlet />

        <footer className="flex sm:justify-end justify-center items-end dark:text-gray-300 text-gray-600 w-full mt-5 flex-grow">
          <p>&copy; {new Date().getFullYear()} Isaac Clark</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
