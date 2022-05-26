import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hi everyone';

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>value : {secondValue}</h2> */}
      <h1>{text||'John Smith'}</h1>
      {text && <h1> Hello!!!</h1>}
      {!text && <h1> Hello everyone!!!</h1>}
    </>
  );
};

export default ShortCircuit;
