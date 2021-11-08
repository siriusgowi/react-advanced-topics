import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';


  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  return <div className='container'>
    <h1>{text || 'Welcome'}</h1>
    <h3>{isError && 'Keep it up'}</h3>
    {isError ? <p>There is an error</p> : <p>There is no error</p>}
    <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
  </div>;
};

export default ShortCircuit;
