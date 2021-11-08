import React, { useState, useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return <div className='container'>
    <button className='btn' onClick={()=> setShow(!show)}>show/hide</button>
    {show && <Item/>}
  </div>;
};

const Item = ()=>{
  const [size, setSize] = useState(window.innerWidth)

const checkSize = ()=>{
  setSize(window.innerWidth)
}

  useEffect(()=>{
    window.addEventListener('resize',checkSize)
    return (()=>{
      window.removeEventListener('resize',checkSize)
    })
  },[])
  return <div>
    <h1>Window</h1>
    <h3>size : {size}</h3>
  </div>
}
export default ShowHide;
