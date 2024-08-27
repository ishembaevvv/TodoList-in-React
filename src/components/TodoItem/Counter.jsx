import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0); // Правильный порядок

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
}
