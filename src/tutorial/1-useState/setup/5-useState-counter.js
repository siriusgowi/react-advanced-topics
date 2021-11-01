import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0)
  const resetValue = ()=>{
    return setValue(0)
  }

  const increaseValue = ()=>{
setTimeout(()=>{
  setValue((currentvalue)=>{
    return currentvalue + 1
  })
},2000)
  }
  return( 
  <>
  <section><h1>{value}</h1>
  <button type='button' className='btn' onClick={()=> setValue(value - 1)}>decrease</button>
  <button type='button' className='btn' onClick={resetValue}>reset</button>
  <button type='button' className='btn' onClick={()=> setValue(value + 1)}>increase</button>
  </section>
  <h1>More Complex Example</h1>
  <h1>{value}</h1>
  <button type='button' className='btn' onClick={increaseValue}>complex example</button>
  </>
  
)};

export default UseStateCounter;
