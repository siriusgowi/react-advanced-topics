import React, { useState } from 'react';

const UseStateObject = () => {
  const[person, setPerson] = useState({
    name :'virat',
    email :'virat@gmail.com',
    message : 'I am a fresher.'
  })
  const changeMessage = ()=>{
    setPerson({...person, message : 'I am a doctor'})
  }
  return( <div>
  <h4>{person.name}</h4>
  <h4>{person.email}</h4>
  <h4>{person.message}</h4>
  <button type='button' className='btn' onClick={changeMessage}>change message</button>
  </div>
  )};

export default UseStateObject;
