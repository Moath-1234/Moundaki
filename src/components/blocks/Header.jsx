import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
    return (
        <div className="header">
            <Container>
                <div className="header__content">
                    {/* header logo start  */}
                    <ScrollAnimation animateIn="bounceInLeft" duration={2} offset={0} animateOnce={true}>
                        <div className="header__content__logo">
                            <Link to="#">
                                <img src="/images/logo.png" alt="logo" className="clickable" />
                            </Link>
                        </div>
                    </ScrollAnimation>
                    {/* header logo end  */}

                    {/* header web list start */}
                    <ScrollAnimation animateIn="bounceInRight" duration={2} offset={0} animateOnce={true}>
                        <ul className="header__content__list">
                            <li>
                                <Link to="#">HOME</Link>
                            </li>

                            <li>
                                <Link to="#">ABOUT</Link>
                            </li>

                            <li>
                                <Link to="#">BLOG</Link>
                            </li>

                            <li>
                                <Link to="#">MARKETPLACE</Link>
                            </li>

                            <li>
                                <Link to="#">LOGIN</Link>
                            </li>
                        </ul>
                    </ScrollAnimation>

                    {/* header web list end */}

                    {/* header mobile list start */}

                    <div className="mobile-push-menu">
                        <Menu customBurgerIcon={<i className="fa fa-bars" />} customCrossIcon={<i className="fa fa-times croosIconMenu" />}>
                            <div className="sideMenu_logo">
                                <a href="/">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </div>

                            <div className="sideMenu_List">
                                <ul className="mb-0 mt-3">
                                    <li>
                                        <Link to="#">HOME</Link>
                                    </li>

                                    <li>
                                        <Link to="#">ABOUT</Link>
                                    </li>

                                    <li>
                                        <Link to="#">BLOG</Link>
                                    </li>

                                    <li>
                                        <Link to="#">MARKETPLACE</Link>
                                    </li>

                                    <li>
                                        <Link to="#">LOGIN</Link>
                                    </li>
                                </ul>
                            </div>
                        </Menu>
                    </div>

                    {/* header mobile list end */}
                </div>
            </Container>
        </div>
    );
};

export default Header;
