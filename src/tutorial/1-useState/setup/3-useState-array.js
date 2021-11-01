import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItems = (id)=>{
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }
  return (
  <div className='container'>
  {
    people.map((person)=>{
      const {id, name} = person
      return <div key={id} className='item'>
     <h4>{name}</h4>
      <button type='button' className='btn' onClick={()=> removeItems(id)}>remove</button>
      </div>
    
    })
  }
  <button type='button' className='btn' onClick={()=> setPeople([])}>clear items</button>
 </div>
 )
  
};

export default UseStateArray;
