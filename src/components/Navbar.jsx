import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__logo" href="/">
          <img src="./logo-light-theme.svg" alt="" width={245.53} height={40} />
        </a>

        <button className="header__theme__toggler">
          <img src="./icon-moon.svg" alt="" width={22} height={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
