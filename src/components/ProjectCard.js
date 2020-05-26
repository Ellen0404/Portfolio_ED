import React from "react";
import { Container, Col } from "react-bootstrap";



const ProjectCard = (props) => {
    const { title, image, link, tools, description1, description2 } = props
    return (
        <>
            <Col className="col-sm-6 col-md-6 col-lg-6">
                <a href={link} target="_blank" class="work-thumb">
                    <div class="work-text">
                        <h2>{title}</h2>
                        <h3>{tools}</h3>
                        <p>{description1}<br />{description2}</p>
                    </div>
                    <img src={image} height="250" alt="altimage" />
                </a>
            </Col>
        </>
    )
}

export default ProjectCard;