import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TextInput from "../blocks/TextInput";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
    const [responsive] = useState({
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 375 },
            items: 1,
        },
        Sm_mobile: {
            breakpoint: { max: 375, min: 0 },
            items: 1,
        },
    });

    const [fields, setFields] = useState({
        name: "",
        email: "",
    });

    const onFieldChange = (name, value) => {
        setFields({
            ...fields,
            [name]: value,
        });
    };

    return (
        <div className="home">
            {/* landing section start  */}
            <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
                <div className="landing">
                    <div className="bg-shadow"></div>
                    <Container>
                        {/* landing details section start  */}
                        <div className="landing__details">
                            <div className="landing__details__title">
                                <h3>FOUND AMAZING</h3>
                                <h3>MOUNTAIN TO EXPLORE</h3>
                            </div>

                            <p>Start to getting bored with your activities? it's time to start your adventures</p>
                            <div className="landing__details__search">
                                <Form.Select size="lg" defaultValue="-1">
                                    <option disabled>Select Continent</option>
                                    <option value="0">Option 1</option>
                                    <option value="1">Option 2</option>{" "}
                                </Form.Select>

                                <Form.Select size="lg" defaultValue="-1">
                                    <option value="-1" disabled>
                                        Select Country
                                    </option>
                                    <option value="0">JORDAN</option>
                                    <option value="1">KSA</option>{" "}
                                </Form.Select>

                                <button>
                                    Get Started
                                    <i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        {/* landing details section end  */}
                    </Container>
                </div>

                {/* landing section start  */}

                {/* Popular Mountain section start  */}
                <div className="popular-mountain">
                    <Container>
                        <h3>Populer Mountain</h3>
                        <div className="popular-mountain__cards">
                            <div className="popular-mountain__cards__single-card">
                                <img src="/images/rohit-tandon-9wg5jCEPBsw-unsplash.png" alt="card" />
                                <div className="card-info">
                                    <p>Mountain Everest</p>
                                    <span>Mountain Everest is Earth's highest mountian above sea level</span>
                                </div>{" "}
                            </div>

                            <div className="popular-mountain__cards__single-card">
                                <img src="/images/lucas-clara-hvPB-UCAmmU-unsplash.png" alt="card" />
                                <div className="card-info">
                                    <p>Mountain Denali</p>
                                    <span>Denali is the highest mountian peak in North America</span>
                                </div>{" "}
                            </div>

                            <div className="popular-mountain__cards__single-card">
                                <img src="/images/james-adams-zUSY6EgCRHo-unsplash.png" alt="card" />
                                <div className="card-info">
                                    <p>Mountain Kilimanjaro</p>
                                    <span>Mountain Kilimanjaro is a dormart volcano in jorjea</span>
                                </div>{" "}
                            </div>
                        </div>
                    </Container>
                </div>
                {/* Popular Mountain section end  */}
            </ScrollAnimation>

            {/* article section start  */}
            <Container>
                <div className="article">
                    <Row className="no-margin">
                        <Col md={6} className="no-padd">
                            <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce={true}>
                                <div className="article__img">
                                    <img src="/images/joshua-earle--87JyMb9ZfU-unsplash.jpg" alt="artical" />
                                </div>
                                <div className="article__details">
                                    <h3>
                                        Moundaki Help you
                                        <br />
                                        Find Hiking Destination
                                    </h3>

                                    <p>
                                        We are company engaged in the field of tourisn, we provide search services for the best mountain climbing
                                        piaces from all over the word with compiete information and ticket booking feature,
                                    </p>

                                    <button className="submit-button">Read More</button>
                                </div>
                            </ScrollAnimation>
                        </Col>
                        <Col md={6} className="no-padd">
                            <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true} className="column_reverse_under768">
                                <div className="article__details box-shadow-special">
                                    <h3>
                                        Moundaki Help you
                                        <br />
                                        Find Hiking Destination
                                    </h3>

                                    <p>
                                        We are company engaged in the field of tourisn, we provide search services for the best mountain climbing
                                        piaces from all over the word with compiete information and ticket booking feature,
                                    </p>

                                    <button className="submit-button">Read More</button>
                                </div>
                                <div className="article__img">
                                    <img src="/images/nasim-dadfar-w28Ei0Ap96w-unsplash.jpg" alt="artical" />
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </div>
            </Container>
            {/* article section end  */}

            {/* User reviews section start  */}
            <div className="user-review">
                <Container>
                    <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce={true}>
                        <div className="user-review__title">
                            <h4>User Reviews</h4>
                        </div>
                    </ScrollAnimation>
                    <Carousel responsive={responsive} showDots={false} infinite={true}>
                        <ScrollAnimation animateIn="fadeInLeft" duration={2} delay={1} animateOnce={true}>
                            <div className="user-review__card">
                                <img src="/images/MAN.png" alt="user" />
                                <div>
                                    <h6>Arthur Holmes</h6>
                                    <span>Team Leader</span>
                                    <p>
                                        "I can't say enough about it.
                                        <br />
                                        Thank for the great service.
                                        <br />
                                        it's the perfect solution."
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" duration={2} delay={1} animateOnce={true}>
                            <div className="user-review__card">
                                <img src="/images/MAN.png" alt="user" />
                                <div>
                                    <h6>Ada Winston</h6>
                                    <span>Collage Student</span>
                                    <p>
                                        "I am really satisfild with it.I'm
                                        <br />
                                        good to go . it really saves me
                                        <br />
                                        time and effart."
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <div className="user-review__card">
                            <img src="/images/MAN.png" alt="user" />
                            <div>
                                <h6>Ada Winston</h6>
                                <span>Collage Student</span>
                                <p>
                                    "I am really satisfild with it.I'm
                                    <br />
                                    good to go . it really saves me
                                    <br />
                                    time and effart."
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </Container>
            </div>

            {/* User reviews section end */}

            {/* Recent News section start  */}
            <div className="recent-news">
                <Container>
                    <div className="recent-mews__header">
                        <ScrollAnimation animateIn="fadeInLeft" duration={2} delay={1} animateOnce={true}>
                            <h4>Recent News</h4>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInRight" duration={2} delay={1} animateOnce={true}>
                            <button className="submit-button">See More</button>
                        </ScrollAnimation>
                    </div>
                    <Row>
                        <Col md={6}>
                            <ScrollAnimation animateIn="fadeInLeft" duration={2} delay={1} animateOnce={true}>
                                <div className="recent-news-left-side">
                                    <img src="/images/lucas-clara-hvPB-UCAmmU-unsplash.jpg" alt="k" />
                                    <div className="recent-news__info">
                                        <p>INFORMATION</p>
                                        <h4>Hiking information during Covid-19</h4>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </Col>
                        <Col md={6}>
                            <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true}>
                                <div className="recent-news-right-side">
                                    <img src="/images/james-adams-zUSY6EgCRHo-unsplash.png" alt="k" />
                                    <div className="recent-news__info">
                                        <p>INFORMATION</p>
                                        <h4>Hiking information during Covid-19</h4>
                                    </div>
                                </div>
                                <div className="recent-news-right-side">
                                    <img src="/images/jordan-heath-GLQu3H9SHl0-unsplash.jpg" alt="k" />
                                    <div className="recent-news__info">
                                        <p>INFORMATION</p>
                                        <h4>Hiking information during Covid-19</h4>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Recent News section end */}

            {/* Subscribe section start  */}
            <Container>
                <ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce={true}>
                    <div className="subscribe">
                        <div className="subscribe__bg-shadow"></div>
                        <div className="subscribe__title">
                            <h3>SUBSCRIBE TO OUR</h3>
                            <h3>NEWSLETTER</h3>
                        </div>

                        <p>Get daily updates in your email keep updated with all the latest news from Moundaki</p>
                    </div>
                </ScrollAnimation>

                <div className="subscribe-form">
                    <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
                        <div className="subscribe-form__content">
                            {/* name  input start  */}
                            <TextInput label="" value={fields.name} name="name" placeholder="Enter Your Name" onFieldChange={onFieldChange} />
                            {/* name  input end  */}

                            {/* email  input start  */}
                            <TextInput label="" value={fields.email} name="email" placeholder="Enter Your Email" onFieldChange={onFieldChange} />
                            {/* email  input end  */}

                            <button className="submit-button">Subscribe</button>
                        </div>
                    </ScrollAnimation>
                </div>
            </Container>

            {/* Subscribe section end  */}
        </div>
    );
};

export default Home;
