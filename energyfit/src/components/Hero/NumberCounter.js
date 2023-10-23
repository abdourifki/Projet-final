import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './NumberCounter.css';

const NumberCounter = ({ targetNumber, label, plus }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(0);
  }, []);

  const props = useSpring({
    number: targetNumber,
    from: { number: 0 },
    config: { duration: 3000 }, 
  });

  return (
    <div className="number-counter-container">
      <animated.span className="number">
        {props.number.interpolate((val) => Math.floor(val))}
      </animated.span>
      <span className="plus-sign">{plus}</span>
      <br/>
      <span className="year">{label}</span>
    </div>
  );
};

export default NumberCounter;
