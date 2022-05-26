import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hi everyone';

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>value : {secondValue}</h2> */}
      <h1>{text || "John Smith"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1> Error!!!</h1>}
      {isError ? (
        <p>Error found!!!</p>
      ) : (
        <div>
          <h3> no Error found!!!</h3>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
