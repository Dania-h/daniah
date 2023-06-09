import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div>
        <h2>DH</h2>
      </div>
      <div>
        <ul className="header__ul">
          <li className='header__li'>About</li>
          <li className='header__li'>Skills</li>
          <li className='header__li'>Projects</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
