import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(refContainer.current.value)
  }


  useEffect(()=>{
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return <div className='container'>
   <form className='form' onSubmit={handleSubmit}>
     <div>
       <input type='text' ref={refContainer}></input>
       <button type='submit'>submit</button>
     </div>
   </form>
  </div>;
};

export default UseRefBasics;
