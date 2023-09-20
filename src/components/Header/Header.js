import "./Header.scss";
import logo from "../../assets/images/Dania-logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div>
        <img className="header__logo" src={logo} alt="Dania's blue circle logo" />
      </div>
      <nav>
        <ul id="navigation" className={`header__ul ${ menuOpen ? "open-menu" : ""}`}>
          <HashLink smooth to="/#skills" onClick={()=> setMenuOpen(false)}>
            <li className="header__li">SKILLS</li>
          </HashLink>
          <HashLink smooth to="/#projects" onClick={()=> setMenuOpen(false)}>
            <li className="header__li">PROJECTS</li>
          </HashLink>
          <HashLink smooth to="/#contact" onClick={()=> setMenuOpen(false)}>
            <li className="header__li">CONTACT</li>
          </HashLink>
        </ul>
      </nav>
      <button
        className="header__button"
        aria-controls="navigation"
        aria-expanded="false"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <span className="sr-only">Menu</span>
      </button>
    </header>
  );
}

export default Header;
