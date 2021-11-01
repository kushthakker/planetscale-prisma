import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import ManageMode from "./ManageMode";

const DarkModeButton = () => {
  const { theme, setTheme, getTheme } = ManageMode();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="absolute top-8 right-8 md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {getTheme === "dark" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export default DarkModeButton;
