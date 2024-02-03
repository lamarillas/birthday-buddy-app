import React from 'react'

const Person = (props) => {
  const person = {...props.person};
  console.log(person);
  return (
    <div className='person'>
      <img className='img' src={ person.image } alt={person.name} />
      <h4>{ person.name }</h4>
      <p>{ person.age } years </p>
    </div>
  )
}

export default Person