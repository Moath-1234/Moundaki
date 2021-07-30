import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
                <Container>
                    <Row>
                        <Col sm={6} md={3}>
                            <div className="footer__logo-side">
                                <img src="/images/logo.png" alt="logo" className="clickable" />

                                <p>Start to getting bored with your activiteis? it's time to start your adventures</p>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-twitter"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="footer__list">
                                <p>Popular Maountain</p>
                                <ul>
                                    <li>
                                        <Link to="/">Mount Everest</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Mount Denail</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Mount Kilimanjaro</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Mount Fuji</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="footer__list">
                                <p>Navigation</p>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Marketpiace</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="footer__list">
                                <p>Contact</p>
                                <ul>
                                    <li>
                                        <Link to="/">(0921) 2421244</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Small Health</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Birmingham</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    );
};

export default Footer;
