import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)

  if(isLoading){
    return <div className='container'>
    <h1>Loading...</h1>
    </div>
  }
  return (
    <div className='container'>
    <h1>conditional rendering</h1>
    </div>
  );
};

export default MultipleReturns;
