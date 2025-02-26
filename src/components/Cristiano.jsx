// Button.jsx
import React, { useState } from 'react';

function Button({ text }) {
  const [label, setLabel] = useState(text);

  const handleClick = () => {
    setLabel('Siuuuu!');
  };

  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
