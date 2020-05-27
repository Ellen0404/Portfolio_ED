import React from "react";
import { useSpring, animated } from 'react-spring';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CardBlock from "../components/CardBlock";
import ContactFooter from "../components/ContactFooter";
import range from 'lodash-es/range';


const Home = () => {

    const items = range(3)
    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })
    return (
        <>
            <Nav />
            <div className="backImg">
                <div className="container justify-content-center">

                    <div className="col-lg-12 text-center col-sm-12">
                        <div>
                            <br></br>

                        </div>
                        <br></br>
                        <br></br>
                        <div className="row  justify-content-center space">
                            <animated.div key={items[0]}
                                className="script-bf-box"
                                style={{ transform: radians.interpolate(interp(items[0])) }}>
                                <p className="col-sm-3 mb-0  move" data-aos="fade-up" data-aos-delay="200">
                                    <span><i className="icon-github-alt"></i></span>
                                    <a href="https://github.com/Ellen0404" target="_blank"
                                        className="ui olive  button px-4 py-3">GitHub</a>
                                </p>
                            </animated.div>
                            <animated.div key={items[1]}
                                className="script-bf-box"
                                style={{ transform: radians.interpolate(interp(items[1])) }}>
                                <p className=" col-sm-3 mb-0  move" data-aos="fade-up" data-aos-delay="200">
                                    <a href="/images/Elena Demidionok_developer.docx.pdf" target="_blank"
                                        className="ui olive  button px-4 py-3">Resume</a>
                                </p>
                            </animated.div>

                            <animated.div key={items[2]}
                                className="script-bf-box"
                                style={{ transform: radians.interpolate(interp(items[2])) }}>
                                <p className="col-sm-3 mb-0  move" data-aos="fade-up" data-aos-delay="200">
                                    <a href="https://www.linkedin.com/in/elena-demidionok/" target="_blank"
                                        className="ui olive button px-4 py-3">Linkedin</a>
                                </p>
                            </animated.div>


                        </div>
                        <br></br>
                        <h1 className="mb-4 " style={{ color: "#a0b603", textShadow: "1px 1px 2px " }}>
                            Hello, I'm Elena Demidionok.<br />
                                Welcome to my digital introduction.
                            </h1>

                    </div>

                </div>
            </div>

            <div className="section">
                <div className="container space2">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2" data-aos="fade-up" data-aos-delay="400">
                            <figure className="img-dotted-bg">
                                <br></br>
                                <img src="/images/EllenDphoto_webformat.jpg" width="300" height="400" alt="altimg"
                                    className="img-fluid" />
                            </figure>
                        </div>
                        <div className="col-md-5 mr-auto" data-aos="fade-up" data-aos-delay="">
                            <i className="icon-github-alt"></i>
                            <h2 className="mb-4 section-title">Beauty of the code</h2>
                            <p>I've found this whole world of creativity and logical connections, I've found that logic could be
                            very
                            creative and beautiful , that was the perfect combination of that I was looking for. So here I
                            am,
                            exploring this amazing world of coding , tying my best and integrating this knowledge into my
                            updated life!
                    </p>
                            <p>Please enjoy browsing every single page of my coding word and feel free to contact me
                        with your questions, ideas and interesting projects !</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-light block-11">
                <div className="container space">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="mb-4 section-title">My Development Tools</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5 text-center" data-aos="fade-up" data-aos-delay="">
                            <div className="service">
                                <span className="icon icon-layers mb-4 d-block"></span>
                                <h3>Front-End</h3>
                                <div>
                                    <h6>HTML 5</h6>
                                    <h6>CSS 3</h6>
                                    <h6>Bootstrap 4</h6>
                                    <h6>Semantic UI</h6>
                                    <h6>React-Bootstrap</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="service">
                                <span className="icon icon-badge mb-4 d-block"></span>
                                <h3>JavaScript</h3>
                                <div>
                                    <h6>React.js</h6>
                                    <h6>JavaScript</h6>
                                    <h6>JQuery/ ES6+</h6>
                                    <h6>React.js</h6>
                                    <h6>JSON</h6>
                                    <h6>AJAX </h6>
                                    <h6>APIs</h6>
                                    <h6>DOM</h6>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-5 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="service">
                                <span className="icon icon-magnet mb-4 d-block color"></span>
                                <h3>Back-End</h3>
                                <div>
                                    <h6>Node.js</h6>
                                    <h6>Express.js</h6>
                                    <h6>MVC</h6>
                                    <h6>MySQL</h6>
                                    <h6>MongoDB</h6>
                                    <h6>Sequelize</h6>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="section portfolio-section">
                <div className="container space">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="mb-4 section-title">Previous works</h2>
                            <p>Take a look at my previous projects, with a Full-stack cicle. </p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <CardBlock
                                link="https://ellen0404.github.io/Employee-Directory_ED/"
                                title="Employee Directory"
                                tools="React/ ES6/ AJAX/ Semantic UI"
                                description1="React app to view, search, filter,"
                                description2=" delete employees"
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590611019/low-angle-photography-of-high-rise-buildings-2295433_fb19o2.jpg" />
                            <CardBlock
                                link="https://tripoint.herokuapp.com/"
                                title="TriPoint"
                                tools="Node/Express/MySQL/Sequelize/Handlebars.js/ JQuery"
                                description1="MySQL db combined with a 3rd party API."
                                description2="Sequelize and Express loaded app"
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590610830/auto-automobile-automotive-black-441607_xml5zm.jpg" />
                            <CardBlock
                                link="https://lit-chamber-43751.herokuapp.com"
                                title="WorkOut Tracker"
                                tools="Node/Express/Mongo db/ AJAX/ JavaScript/ CSS"
                                description1="Mongo DB tracks you"
                                description2="workout progress"
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590539393/two-dumbbells-669580_1_itdwli.jpg" />
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <ContactFooter />
            <Footer />
        </>
    )
}

export default Home;