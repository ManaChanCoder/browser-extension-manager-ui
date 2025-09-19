// icons
import Logo from "../assets/logo.svg";
import LogoDarkMode from "../assets/logo-dark-mode.png";
import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";

// store
import { themeStorage } from "../store/themeStore";

const Navbar = () => {
  const { isDark, toggle } = themeStorage();

  return (
    <div
      className={`d-flex justify-content-between align-items-center rounded-2 px-3 py-1 mb-5 ${
        isDark ? "bg-white" : "nav-dark-mode"
      }`}
    >
      {isDark ? <img src={Logo} alt="" /> : <img src={LogoDarkMode} alt="" />}

      <button
        className={`border-0 outline-none bg-transparent p-2 rounded-3 ${
          isDark ? "light-mode-btn" : "dark-mode-btn"
        }`}
        onClick={toggle}
      >
        {isDark ? <img src={Moon} alt="moon" /> : <img src={Sun} alt="sun" />}
      </button>
    </div>
  );
};

export default Navbar;
