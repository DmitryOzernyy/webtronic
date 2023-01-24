import logo from '../../styles/img/svg/logo/logo.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
        <div className="wrapper">
            <div className="header__wrapper">
                <div className="header__logo">
                    <a href="/" className="header__logo__link">
                        <img src={logo} alt="Webtronic" className="header__logo__img" />
                    </a>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <a href="#!" className="header__link">About</a>
                        </li>
                        <li className="header__item">
                            <a href="#!" className="header__link">Programs</a>
                        </li>
                        <li className="header__item">
                            <a href="#!" className="header__link">Steps</a>
                        </li>
                        <li className="header__item">
                            <a href="#!" className="header__link">Questions</a>
                        </li>
                        <li className="header__item">
                            <a href="#!" className="header__link">Get in touch</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header;