import React from 'react';

const ErrorExample = () => {
  let title = 'welcome to usestate in reactjs'
  const handleClick = ()=>{
    title = 'React Hooks'
    console.log(title)
  }
  return( 
    <React.Fragment>
  <h2>{title}</h2>
<button type='button' onClick = {handleClick}>change title</button>
</React.Fragment>
  )
  };

export default ErrorExample;
