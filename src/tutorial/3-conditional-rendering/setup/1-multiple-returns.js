import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')


const getUser = async()=>{
  try{
const response = await fetch(url)
  const user = await response.json()
  const {login} = user
  setUser(login)
  }
  catch(e){
     return console.log(e)
  }
  
}


useEffect(()=>{
  getUser()
  setIsLoading(false)
})

  if(isLoading){
    return <div className='container'>
    <h1>Loading...</h1>
    </div>
  }
  if(isError){
    return <div className='container'>
      <h1>Error...</h1>
    </div>
  }
  return (
    <div className='container'>
    <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
