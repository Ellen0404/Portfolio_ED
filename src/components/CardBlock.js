import React from "react";

import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const CardBlock = (props) => {
    const { config = {} } = props;
    const { field = [] } = config;


    const [spring, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    transform: spring.xys.interpolate(trans),
                    backgroundImage: `url(${props.image})`
                }}
            >
                <div className="container justify-content-center">
                    <div>
                        <h1>
                            {props.title}
                        </h1>
                        <div>
                            {field.map(element => (
                                <h6>{element}</h6>
                            )
                            )}
                        </div>
                    </div>


                </div>
            </animated.div>
        </>
    )
}

export default CardBlock;