import React, { useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useSpring, animated, useTransition } from 'react-spring'
import range from 'lodash-es/range'



const Contact = () => {
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
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        window.open('mailto:vhelen0404@gmail.com');

        setContact({
            name: "",
            phone: "",
            email: "",
            message: ""
        })
    }
    return (
        <>
            <Nav />
            <br></br>
            <Container>
                <div className="row">
                    {items.map(i =>
                        <animated.div key={i}
                            className="script-bf-box"
                            style={{ transform: radians.interpolate(interp(i)) }}>
                            HElOOOOOOO
                         </animated.div>)}
                </div>
            </Container>
            <Container>
                <br></br>
                <div className="ui small form" >
                    <form action="mailto:vhelen0404@gmail.com" method="post">
                        <div className="two fields">
                            <div className="field">
                                <label>Name</label>
                                <div className="ui left icon input">
                                    <input
                                        placeholder="Name"
                                        name="name"
                                        value={contact.name}
                                        onChange={handleInputChange}
                                        type="text" />
                                    <i className="edit outline icon"></i>

                                </div>
                            </div>
                            <div className="field">
                                <label>Phone</label>
                                <div className="ui left icon input">
                                    <input placeholder="Phone" type="text"
                                        name="phone"
                                        value={contact.phone}
                                        onChange={handleInputChange}
                                    />
                                    <i className="phone icon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <div className="ui left icon input">
                                <input placeholder="Email" type="email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleInputChange}
                                />
                                <i className="at icon"></i>

                            </div>
                        </div>

                        <div className="field">
                            <label>Message</label>

                            <textarea
                                name="message"
                                value={contact.message}
                                onChange={handleInputChange}
                            ></textarea>

                        </div>
                        <div type="submit" className="ui submit button"
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </div>
                    </form>
                </div>
                <br></br>
            </Container>
            <Footer />

        </>
    )
}
export default Contact;