import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size , setSize] = useState(window.innerWidth)
 
const checkSize = ()=>{
 setSize(window.innerWidth)
}

  useEffect(()=>{
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return ()=>{
      console.log('checkSize')
     window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <div className='container'>
  <h2>useEffect cleanup</h2>
  <h3>{size} PX</h3>
  </div>
  );
};

export default UseEffectCleanup;
