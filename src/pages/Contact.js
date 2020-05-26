import React, { useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

import { useTransition, animated } from 'react-spring'


const Contact = () => {
    const [items, set] = useState(["hello", "my", "phone"])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    })

    return (
        <>
            <Nav />
            <Container>
                {transitions.map(({ item, props, key }) =>
                    <animated.div key={key} style={props}>
                        {item.text}
                    </animated.div>
                )}
            </Container>
            <Container>
                <br></br>
                <div class="ui small form">
                    <div class="two fields">
                        <div class="field">
                            <label>Name</label>
                            <div class="ui left icon input">
                                <input placeholder="Name" type="text" />
                                <i class="edit outline icon"></i>

                            </div>
                        </div>
                        <div class="field">
                            <label>Phone</label>
                            <div class="ui left icon input">
                                <input placeholder="Phone" type="text" />
                                <i class="phone icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <div class="ui left icon input">
                            <input placeholder="Email" type="text" />
                            <i class="at icon"></i>

                        </div>
                    </div>

                    <div class="field">
                        <label>Message</label>

                        <textarea name="message"></textarea>

                    </div>
                    <div class="ui submit button">Submit</div>
                </div>
                <br></br>
            </Container>
            <Footer />

        </>
    )
}
export default Contact;