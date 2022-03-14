import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([{
    letter: "S",
    key: 0
  },{
    letter: "A",
    key: 1
  },{
    letter: "L",
    key: 2
  },{
    letter: "O",
    key: 3
  },
]);

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transition.map(({ item, key, props }) =>
          <animated.h1 style={props} key={key} className="Hello">
            {item.key}
          </animated.h1>
      )}
      <button onClick={() => setItems([{
        letter: "S",
        key: 1
      }])}>Toggle</button>
    </div>
  );
};

export default Toggle;


// const transition = useTransition(isToggled, null, {
//   from: { opacity: 0, position: 'absolute' },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
// });

// return (
//   <div>
//     {transition.map(({ item, key, props }) =>
//       item ? (
//         <animated.h1 style={props} className="Hello">
//           Hello
//         </animated.h1>
//       ) : (
//         <animated.h1 style={props} className="Hello">
//           World
//         </animated.h1>
//       )
//     )}
//     <button onClick={() => setToggle(!isToggled)}>Toggle</button>
//   </div>
// );
