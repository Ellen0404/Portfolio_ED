import React from "react";
import { useSpring, animated } from 'react-spring';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CardBlock from "../components/CardBlock";
import ProjectCard from "../components/ProjectCard";
import ContactFooter from "../components/ContactFooter";

import { Container } from "react-bootstrap";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Home = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <>
            <Nav />
            <div class="backImg">
                <div class="container justify-content-center">

                    <div class="col-lg-12 text-center col-sm-12">
                        <div>
                            <h1 class="mb-4 ">
                                Hello, I'm Elena Demidionok.<br />
                                Welcome to my digital introduction.
                            </h1>
                        </div>

                        <div class="row  justify-content-center space">

                            <p class="col-sm-3 mb-0  move" data-aos="fade-up" data-aos-delay="200">
                                <span><i class="icon-github-alt"></i></span>
                                <a href="https://github.com/Ellen0404" target="_blank"
                                    class="ui olive  button px-4 py-3">GitHub</a>
                            </p>
                            <p class=" col-sm-3 mb-0  move" data-aos="fade-up" data-aos-delay="200">
                                <a href="./assets/images/Elena Demidionok_developer.docx.pdf" target="_blank"
                                    class="ui olive  button px-4 py-3">Resume</a>
                            </p>
                            <p class="col-sm-3 mb-0  move" data-aos="fade-up" data-aos-delay="200">
                                <a href="https://www.linkedin.com/in/elena-demidionok/" target="_blank"
                                    class="ui olive button px-4 py-3">Linkedin</a>
                            </p>

                        </div>


                    </div>

                </div>
            </div>

            <div class="section">
                <div class="container space2">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-md-2" data-aos="fade-up" data-aos-delay="400">
                            <figure class="img-dotted-bg">
                                <img src="./assets/images/EllenDphoto_webformat.jpg" width="400" height="500" alt="Image"
                                    class="img-fluid" />
                            </figure>
                        </div>
                        <div class="col-md-5 mr-auto" data-aos="fade-up" data-aos-delay="">
                            <i class="icon-github-alt"></i>
                            <h2 class="mb-4 section-title">Beauty of the code</h2>
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
            <div class="section bg-light block-11">
                <div class="container space">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-8 text-center">
                            <h2 class="mb-4 section-title">My Development Tools</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <CardBlock
                            title="Front-End"
                            image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590432043/rectangular-green-swiss-cheese-leafed-plant-photo-mounted-on-1534924_afxa1k.jpg"
                            config={{
                                field: [
                                    "HTML 5",
                                    "CSS 3",
                                    "Bootstrap 4",
                                    "Semantic UI",
                                    "React-Bootstrap"
                                ]
                            }
                            }

                        />
                        <CardBlock
                            title="JavaScript"
                            image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590432043/rectangular-green-swiss-cheese-leafed-plant-photo-mounted-on-1534924_afxa1k.jpg"
                            config={{
                                field: [
                                    "HTML 5",
                                    "Query/ ES6+",
                                    "React.js",
                                    "JSON",
                                    "AJAX",
                                    "APIs",
                                    "DOM"
                                ]
                            }}
                        />
                        <CardBlock
                            title="Back-End"
                            image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590432043/rectangular-green-swiss-cheese-leafed-plant-photo-mounted-on-1534924_afxa1k.jpg"
                            config={{
                                field: [
                                    "Node.js",
                                    "Express.js",
                                    "MVC",
                                    "MySQL",
                                    "MongoDB",
                                    "Sequelize"
                                ]
                            }
                            }
                        />
                    </div>
                </div>
            </div>
            <div class="section portfolio-section">
                <div class="container space">
                    <div class="row mb-5 justify-content-center">
                        <div class="col-md-8 text-center">
                            <h2 class="mb-4 section-title">Previous works</h2>
                            <p>Take a look at my previous projects, with a Full-stack cicle. </p>
                        </div>
                    </div>
                </div>
                <Container>
                    <div class="row mb-5 no-gutters">

                        <ProjectCard
                            link="https://tripoint.herokuapp.com/"
                            title="TriPoint"
                            tools="Node/Express/MySQL/Sequelize/Handlebars.js/ JQuery"
                            description1="MySQL db combined with a 3rd party API."
                            description2="Sequelize and Express loaded app"
                            image="https://res.cloudinary.com/dddtjci2s/image/upload/v1589858022/computer-desk-196658_uh4wwv.jpg" />
                        <ProjectCard
                            link="https://ellen0404.github.io/Employee-Directory_ED/"
                            title="Employee Directory"
                            tools="React/ ES6/ AJAX/ Semantic UI"
                            description1="React app to view, search, filter,"
                            description2=" delete employees"
                            image="https://res.cloudinary.com/dddtjci2s/image/upload/v1589857801/technical-plan-drawn-on-paper-located-near-tablet-and-laptop-3850240_nsuiaz.jpg" />
                    </div>
                </Container>
            </div>
            <ContactFooter />
            <Footer />
        </>
    )
}

export default Home;