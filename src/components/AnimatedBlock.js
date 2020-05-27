import React from "react";

import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range';


const AnimatedBlock = (props) => {

    const { address, phone, email } = props;
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
        <div className="row justify-content-center">

            <animated.div key={items[0]}
                className="script-bf-box"
                style={{ transform: radians.interpolate(interp(items[0])) }}>
                <span>{address} </span>
            </animated.div>
            <animated.div key={items[1]}
                className="script-bf-box"
                style={{ transform: radians.interpolate(interp(items[1])) }}>
                <span>{phone}</span>
            </animated.div>
            <animated.div key={items[2]}
                className="script-bf-box"
                style={{ transform: radians.interpolate(interp(items[2])) }}>
                <span>{email}</span>
            </animated.div>
        </div>
    )
}

export default AnimatedBlock;