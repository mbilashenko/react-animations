import React, { useState, useRef } from 'react';
import { animated, useTrail, useSpring, useChain, useTransition } from 'react-spring';

const items = [0, 1, 2, 3, 4]

const Boxes = () => {
  const [on, toggle] = useState(false);

  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%' }
  });

  const transitionRef = useRef();
  // const trail = useTrail(items.length, {
  //   ref: transitionRef, 
  //   from: {
  //     opacity: 0,
  //     transform: `scale(0)`,
  //   },
  //   to: {
  //     opacity: on ? 1 : 0,
  //     transform: on ? `scale(1)` : `scale(0)`,
  //   }
  // });

  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: {
      opacity: 0,
      transform: `scale(0)`,
    },
    enter: {
      opacity: 1,
      transform: `scale(1)`,
    },
    leave: {
      opacity: 0,
      transform: `scale(0)`,
    }
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

  return (
    <div className="full-height">
      <animated.div
        className="boxes-grid-two"
        style={{ width: size, height: size }}
        onClick={() => toggle(!on)}
      >
        {/* {trail.map(animation => (
          <animated.div
            className="box-two"
            style={animation}
          />
        ))} */}
        {transition.map(({ item, key, props }) => (
          <animated.div
            className="box-two"
            key={key}
            style={props}
          />
        ))}
      </animated.div>
    </div>
  );
};

export default Boxes;
