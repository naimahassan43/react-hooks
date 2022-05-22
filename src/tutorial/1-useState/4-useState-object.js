import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 36,
    message: 'random message'
  })

const [name, setName] = useState('Peter')
const [age, setAge] = useState(36)
const [message, setMessage] = useState("random message");

  const changeMessage = ()=> {
    // setPerson({...person, message: 'message changed'})
    setName('John Doe')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change Message
      </button>
    </>
  );
};

export default UseStateObject;
