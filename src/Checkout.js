import React from 'react';
import {useSpring, animated} from 'react-spring';

const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen? 0 : 100,
  })
  // const animation = useSpring({
  //   transform: isOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)` ,
  // })
  return (
    <div className="checkout"
      style={{
        pointerEvents: isOpen ? 'all' : 'none',
      }}
    >
      <animated.div className="checkout-left" style={{
        transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`),

      }}
       />
      <animated.div className="checkout-right" style={{
        transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`),

      }} />
    </div>
  );
}

export default Checkout;
