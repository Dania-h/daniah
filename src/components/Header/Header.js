import "./Header.scss";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <div>
        <h2>DH</h2>
      </div>
      <nav>
        <ul className="header__ul">
          <HashLink smooth to="/#skills">
            <li className="header__li">Skills</li>
          </HashLink>
          <HashLink smooth to="/#projects">
            <li className="header__li">Projects</li>
          </HashLink>
          <li className="header__li">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
