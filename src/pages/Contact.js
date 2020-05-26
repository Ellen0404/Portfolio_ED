import React, { useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

import { useTransition, animated } from 'react-spring'


const Contact = () => {
    // const [items, set] = useState(["hello", "my", "phone"])
    // const transitions = useTransition(items, item => item.key, {
    //     from: { transform: 'translate3d(0,-40px,0)' },
    //     enter: { transform: 'translate3d(0,0px,0)' },
    //     leave: { transform: 'translate3d(0,-40px,0)' },
    // })

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
            {/* <Container>
                {transitions.map(({ item, props, key }) =>
                    <animated.div key={key} style={props}>
                        {item.text}
                    </animated.div>
                )}
            </Container> */}
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