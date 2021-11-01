import React, { useState } from 'react';

const UseStateBasics = () => {
   const [title, setTitle] = useState('hello world')

 const eventHandler = ()=>{
   if(title === 'hello world'){
    setTitle('Hi Welcome')
   }else{
     setTitle('hello world')
   }
  
 }
  return (
  <React.Fragment>
   <h1>{title}</h1>   
   <button className = 'btn' onClick={eventHandler}>change title</button>
  </React.Fragment>
  )

};

export default UseStateBasics;
