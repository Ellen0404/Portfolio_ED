import React from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

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
                            <h2 class="mb-4 section-title">Selected work</h2>
                            <p>Hera are some of my projects. A lot of Java Script , API calls, working on a Back-End and of
                            course
                        some styling. Each project has a list of a developing tools I've used. </p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row no-gutters">
                        <ProjectCard
                            link="https://ellen0404.github.io/Weather-Dashboard_ED/"
                            title="Weather Dashboard"
                            tools="JS/API/AJAX"
                            description1="API based weather app."
                            description2="Shows today's and 5 days forecast"
                            image="/images/adventure-calm-clouds-dawn-414171.jpg"
                        />
                        <ProjectCard
                            link="https://github.com/cwright489/Project1.git"
                            title="Traveler"
                            tools="JQuery/API/AJAX/CSS"
                            description1="4 different API services,"
                            description2="JS functionality to serve user's trevel needs"
                            image="/images/antique-antique-globe-antique-shop-antique-store-414916copy.jpg"
                        />
                        <ProjectCard
                            link="https://intense-taiga-47098.herokuapp.com/"
                            title="Eat-Da-Burger"
                            tools="MySQL/ Node.js/ Express.js/ Handlebars/ JavaScript/ jQuery "
                            description1="MySQL database is controlled by Node and Express from Back-End"
                            description2="and jQuery from Front-End"
                            image="/images/1584652679660.png"
                        />
                        <ProjectCard
                            link="https://github.com/Ellen0404/Employee_tracker_MYSQL_ED"
                            title="Employee tracker MYSQL"
                            tools="MySQL/ Inquirer/ Node.js"
                            description1="This app makes it easy for non-developers"
                            description2="to view and interact with information
                        stored in databases."
                            image="/images/1584395575701.png"
                        />
                        <ProjectCard
                            link="https://calm-headland-85094.herokuapp.com/"
                            title="Note Taker"
                            tools="NODE.js/ Express.js/ JSON/ jQuery/ AJAX"
                            description1="An application that can be used to write, save,"
                            description2="and delete notes."
                            image="https://res.cloudinary.com/dddtjci2s/image/upload/v1589927615/brown-folder-with-black-pen-on-white-table-3944416_hbbso9.jpg"
                        />
                        <ProjectCard
                            link="https://ellen0404.github.io/Quiz-Application/"
                            title="Code Quiz Application"
                            tools="Vanila JS/ DOM/ HTML5/ CSS3/ Bootstrap 4"
                            description1="A timed code quiz with multiple-choice questions."
                            description2="This app runs in the browser
                        and feature dynamically updated <br>HTML and CSS powered by JavaScript code."
                            image="/images/books-on-shelves-2177482.jpg"
                        />


                    </div>
                </div>
            </div>
            <ContactFooter />
            <Footer />

        </>
    )
}

export default Project;