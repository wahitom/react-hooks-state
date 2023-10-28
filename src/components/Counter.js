import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  /*   const countState = useState(0);
  // => [0, setStateFunction]
  const count = countState[0];
  const setCount = countState[1]; */

  //count here is a  variable that represents the current counnt we have
  // and its value is 0 as seen in useState(0)

  //setCount is a function that increments our count
  /*  function increment() {
    setCount(count + 1);
  } */

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

/**
 * whats happening in this code?
 * 
 * Calling setCount(1) tells React that its internal state for our Counter component's count value must update to 1
React updates its internal state
React re-renders the Counter component
When the Counter component is re-rendered, useState will return the current value of React's internal state, which is now 1
The value of count is now 1 within our Counter component
Our component's JSX uses this new value to display the number 1 within the butto
 */
