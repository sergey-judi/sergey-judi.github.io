import { AvatarSVG, GitHubWhite, LinkedIn, Telegram } from "../../assets/image";
import { UrlGitHub, UrlLinkedIn, UrlTelegram } from "../../constant/urls";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content grid items-center">
                    <div className="header-intro">
                        <div className="flex items-end header-intro-wrapper">
                            <img src={AvatarSVG} alt="avatar" className="avatar" />
                            <h1 className="header-name text-white">
                                Serhii Pereiaslavskyi,
                                <br />
                                Middle Java Developer
                            </h1>
                        </div>
                        <p className="header-text text text-white">
                            Some text about me
                        </p>
                    </div>

                    <div className="header-contact">
                        <ul className="contact-info-list grid text-white">
                            <li className="grid items-start info-item">
                                <span className="info-item-icon">
                                    <FaEnvelope size={13} />
                                </span>
                                <p className="info-item-text">
                                    <span className="text">sergeypereyaslavskiy@gmail.com</span>
                                </p>
                            </li>
                            <li className="grid items-start info-item">
                                <span className="info-item-icon">
                                    <FaLocationDot size={13} />
                                </span>
                                <p className="info-item-text">
                                    <span className="text">Kyiv, Ukraine</span>
                                </p>
                            </li>
                        </ul>

                        <ul className="contact-social-list flex items-center">
                            <li className="social-item">
                                <Link to={UrlLinkedIn} target="_blank">
                                    <img src={LinkedIn} />
                                    <span className="tooltip text">LinkedIn</span>
                                </Link>
                            </li>
                            <li className="social-item">
                                <Link to={UrlGitHub} target="_blank">
                                    <img src={GitHubWhite} />
                                    <span className="tooltip text">GitHub</span>
                                </Link>
                            </li>
                            <li className="social-item">
                                <Link to={UrlTelegram} target="_blank">
                                    <img src={Telegram} />
                                    <span className="tooltip text">Telegram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
