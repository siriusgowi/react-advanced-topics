import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0)
  const resetValue = ()=>{
    return setValue(0)
  }
  return( 
  <>
  <h1>{value}</h1>
  <button type='button' className='btn' onClick={()=> value - 1}>decrease</button>
  <button type='button' className='btn' onClick={resetValue}>reset</button>
  <button type='button' className='btn' onClick={()=> value + 1}>increase</button>
  </>
  
)};

export default UseStateCounter;
