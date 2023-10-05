import moon from "../assets/moon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <nav className="flex justify-between items-center font-nunito px-20 h-16 shadow-[0px_2px_0px_0px_#e2e8f0] mb-[2px] max-sm:px-4 dark:bg-darkBlue dark:text-white dark:shadow-[0px_2px_0px_0px_#2D3748]">
      <Link to={"/"}>
        <h1 className="font-[800] md:text-2xl">Where in the world?</h1>
      </Link>
      <button
        className="flex items-center text-base font-[600] gap-1 cursor-pointer"
        onClick={handleTheme}
      >
        <img src={moon} alt="moon" width={12} height={10} /> Dark mode
      </button>
    </nav>
  );
};

export default Navbar;
