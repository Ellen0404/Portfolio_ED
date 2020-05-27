import React from "react";

import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const CardBlock = (props) => {
    const {
        image, title, link, tools, description1, description2
    } = props;



    const [spring, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    transform: spring.xys.interpolate(trans),
                    backgroundImage: `url(${image})`,

                }}
            >
                <div className="container justify-content-center">
                    <div>
                        <br />
                        <h2 className="text-center">
                            {title}
                        </h2>
                        <h3>{tools}</h3>
                        <p>{description1}<br />{description2}</p>

                    </div>
                    <br />
                    <div style={{ marginBottom: 0 }}>
                        <a href={link} className="ui olive inverted  button">View Project</a>

                    </div>

                </div>
            </animated.div>
        </>
    )
}

export default CardBlock;