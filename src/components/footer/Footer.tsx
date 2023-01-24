import logo from '../../styles/img/svg/logo/logo.svg';
import vector_1 from "../../styles//img/svg/social/Vector.svg"
import vector_2 from "../../styles//img/svg/social/Vector-1.svg"
import vector_3 from "../../styles//img/svg/social/Vector-2.svg"
import vector_4 from "../../styles//img/svg/social/linkedin.svg"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
        <div className="wrapper wrapper__footer">
            <div className="footer__logo">
                <a href="/" className="footer__logo__link">
                    <img src={logo} alt="Webtronic" className="header__logo__img" />
                </a>
                <p className="footer__address">
                    Wisconsin Ave, Suite 700
                    Chevy Chase, Maryland 20815
                </p>
            </div>
            <div className="footer__company__links">
                <h5 className="company__title">Company</h5>
                <table>
                    <tr>
                        <td><a href="" className="footer__link">About Us</a></td>
                        <td><a href="" className="footer__link">Review</a></td>
                    </tr>
                    <tr>
                        <td><a href="" className="footer__link">Steps</a></td>
                        <td><a href="" className="footer__link">Gallery</a></td>
                    </tr>
                    <tr>
                        <td><a href="" className="footer__link">FAQs</a></td>
                    </tr>
                </table>     
            </div>
            <div className="footer__social__title">
                <h5 className="social__title">Social media</h5>
                <img src={vector_1} alt="" className="social__img" />
                <img src={vector_2} alt="" className="social__img" />
                <img src={vector_3} alt="" className="social__img" />
                <img src={vector_4} alt="" className="social__img" />
            </div>
        </div>
    </footer>
    )
}

export default Footer;