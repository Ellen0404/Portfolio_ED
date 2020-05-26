import React from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import CardBlock from "../components/CardBlock";

import Footer from "../components/Footer";
import ContactFooter from "../components/ContactFooter";

const Project = () => {
    return (
        <>
            <Nav />

            <div class="section portfolio-section">
                <div class="container space2">
                    <div class="row mb-5 justify-content-center">
                        <div class="col-md-8 text-center">
                            <br />
                            <h2 class="mb-4 section-title">Selected work</h2>
                            <p>Hera are some of my projects. A lot of Java Script , API calls, working on a Back-End and of
                            course
                        some styling. Each project has a list of a developing tools I've used. </p>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="container">
                        <div class="row">
                            <CardBlock
                                link="https://ellen0404.github.io/Weather-Dashboard_ED/"
                                title="Weather Dashboard"
                                tools="JS/API/AJAX"
                                description1="API based weather app."
                                description2="Shows today's and 5 days forecast"
                                image="/images/adventure-calm-clouds-dawn-414171.jpg"
                            />
                            <CardBlock
                                link="https://github.com/cwright489/Project1.git"
                                title="Traveler"
                                tools="JQuery/API/AJAX/CSS"
                                description1="4 different API services,"
                                description2="JS functionality to serve user's trevel needs"
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590534778/apple-computer-desk-electronics-374857_c9hvtm.jpg"
                            />
                            <CardBlock
                                link="https://intense-taiga-47098.herokuapp.com/"
                                title="Eat-Da-Burger"
                                tools="MySQL/ Node.js/ Express.js "
                                description1="MySQL database is controlled by Node and Express from Back-End"
                                description2="and jQuery from Front-End"
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590534966/burger-on-brown-wooden-tray-1108117_nv3vy6.jpg"
                            />
                        </div>
                        <br></br>
                        <br></br>
                        <div class="row">
                            <CardBlock
                                link="https://github.com/Ellen0404/Employee_tracker_MYSQL_ED"
                                title="Employee tracker"
                                tools="MySQL/ Inquirer/ Node.js"
                                description1="This app makes it easy for non-developers"
                                description2="to interact databases."
                                image="/images/1584395575701.png"
                            />
                            <CardBlock
                                link="https://calm-headland-85094.herokuapp.com/"
                                title="Note Taker"
                                tools="NODE.js/ Express.js/ JSON/ jQuery/ AJAX"
                                description1="An application that can be used to write, save,"
                                description2="and delete notes."
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590534599/silver-iphone-x-beside-succulent-plant-1069798_jjfcqk.jpg"

                            />
                            <CardBlock
                                link="https://ellen0404.github.io/Quiz-Application/"
                                title="Code Quiz"
                                tools="Vanila JS/ DOM/ HTML5/ CSS3/ Bootstrap 4"
                                description1="A timed code quiz with "
                                description2="multiple-choice questions."
                                image="https://res.cloudinary.com/dddtjci2s/image/upload/v1590535202/blur-book-stack-books-bookshelves-590493_ripw9a.jpg"
                            />
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <ContactFooter />
            <Footer />

        </>
    )
}

export default Project;