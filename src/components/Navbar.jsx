import "./Navbar.css";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { changeTheme, theme } = useTheme();
  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__logo" href="/">
          {theme == "dark-mode" && (
            <img
              src="./logo-dark-theme.svg"
              alt=""
              width={245.53}
              height={40}
            />
          )}
          {theme == "light-mode" && (
            <img
              src="./logo-light-theme.svg"
              alt=""
              width={245.53}
              height={40}
            />
          )}
        </a>

        <button onClick={changeTheme} className="header__theme__toggler">
          <img
            src={theme == "light-mode" ? "./icon-moon.svg" : "./icon-sun.svg"}
            alt=""
            width={22}
            height={22}
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
