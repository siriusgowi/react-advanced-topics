import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)


  useEffect(()=>{
    if(value >= 1){
    document.title= `New Messages (${value})`
    }
    return console.log('Condition values cannot applicable outside of the useEffect')
  })

  console.log('first rendered')

  return (<div className='container'>
  <h1>{value}</h1>
  <button type='button' className='btn' onClick={()=> setValue(value + 1)}>click me</button>
  
  </div>)
};

export default UseEffectBasics;
